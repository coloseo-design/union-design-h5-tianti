/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-empty */
/* eslint-disable no-plusplus */
/* eslint-disable react/prefer-stateless-function */
import dayjs, { Dayjs } from 'dayjs';
import React, {
  ReactNode, HTMLAttributes, useState, useEffect, useContext,
} from 'react';
import { ConfigContext } from '../config-provider/context';
import { MonthData, getLunarInfo } from './data';
import Header from './header';
import Body from './body';

export interface weekType {
  key: number;
  value: string;
  week: string;
}

export type CalendarBaseData = {
  key: string;
  value: string;
  date: Dayjs;
};

export type CalendarYearData = CalendarBaseData;

export type CalendarMonthData = {
  cur: boolean;
} & CalendarBaseData;

export type CalendarMode = 'month' | 'week';

export interface CalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSelect'>{
  mode?: CalendarMode;
  /** 展示日期 */
  value?: Dayjs | string;
  /** 日期变化回调 */
  onChange?: (date: Dayjs) => void;
  /** 点击选择日期回调 */
  onSelect?: (date: Dayjs) => void;
  // 自己定头部右上角
  actionRightHeader?: string | React.ReactNode;
  // 自定义头部左上角
  actionLeftHeader?: ReactNode | string;
  // 自定义选中背景色
  selectedBgColor?: string;
  // 在每个单元格里面加内容
  dateCellRender?: (date: Dayjs) => ReactNode;
  // /** 自定义渲染日期单元格，返回内容覆盖单元格 */
  dateFullCellRender?: (date: Dayjs) => ReactNode;
}

export type currentMonth = 'current' | 'pre' | 'next';

export interface dateType {
  type: currentMonth;
  date: Dayjs,
  value: string,
  current: number | string;
  weeks: string;
  weekValue?: number;
  gray?: boolean;
  today?: boolean;
  selected?: boolean;
  lunarMonthCn: string;
  lunarDayCn: string;
  solarTerm: string;
}

export const weeks = [
  { key: 0, value: '周日', week: '星期日' },
  { key: 1, value: '周一', week: '星期一' },
  { key: 2, value: '周二', week: '星期二' },
  { key: 3, value: '周三', week: '星期三' },
  { key: 4, value: '周四', week: '星期四' },
  { key: 5, value: '周五', week: '星期五' },
  { key: 6, value: '周六', week: '星期六' },
];

const handleMonthData = (computeValue?: string | Dayjs, propsValue?: string | Dayjs) => {
  const list: dateType[][] = [];
  const month = dayjs(computeValue).get('month') + 1;
  const year = dayjs(computeValue).get('year');
  const cMonthData = MonthData(month, year, 'current', propsValue);
  const preMonth = month - 1 > 0 ? month - 1 : 12;
  const preMonthData = MonthData(preMonth, month - 1 > 0 ? year : year - 1, 'pre', propsValue);
  const nextMonth = month + 1 <= 12 ? month + 1 : 1;
  const nextMonthData = MonthData(nextMonth, month + 1 <= 12 ? year : year + 1, 'next', propsValue);
  const cStartWeek = cMonthData[0].weekValue;
  const cEndWeek = 6 - cMonthData[cMonthData.length - 1].weekValue;
  const tem = [...preMonthData];
  const preDay = cStartWeek ? tem.reverse().slice(0, cStartWeek) : [];
  const nextDay = cEndWeek ? nextMonthData.slice(0, cEndWeek) : [];

  const allData = [...preDay, ...cMonthData, ...nextDay];
  for (let i = 0; i < 6; i += 1) {
    for (let j = 0; j < 7; j += 1) {
      (list[i] ??= []).push(allData[i * 7 + j]);
    }
  }

  return list;
};

const weekDate = (start: Dayjs, end: Dayjs, type: currentMonth, v?: string | Dayjs) => {
  const list: dateType[] = [];
  let time = start;
  while (time < end) {
    list.push({
      value: dayjs(time).format('YYYY-MM-DD'),
      type,
      date: time,
      current: dayjs(time).format('D'),
      weeks: weeks[dayjs(time).day()].value,
      weekValue: dayjs(time).day(),
      gray: dayjs(time).day() === 6 || dayjs(time).day() === 0,
      selected: v ? dayjs(v).format('YYYY-MM-DD') === time.format('YYYY-MM-DD') : false,
      today: dayjs().format('YYYY-MM-DD') === time.format('YYYY-MM-DD'),
      ...getLunarInfo(time),
    });
    time = time.add(1, 'day');
  }
  return list;
};

const handleWeek = (dateValue?: string | Dayjs, propsValue?: string | Dayjs) => {
  const start = dayjs(dateValue).startOf('week');
  const end = dayjs(dateValue).endOf('week');
  const currentWeek = weekDate(start, end, 'current', propsValue);
  const prevWeek = weekDate(start.subtract(7, 'day'), end.subtract(7, 'day'), 'pre', propsValue);
  const nextWeek = weekDate(start.add(7, 'day'), end.add(7, 'day'), 'next', propsValue);
  return {
    currentWeek,
    nextWeek,
    prevWeek,
  };
};

const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
  const {
    onChange,
    onSelect,
    actionRightHeader,
    selectedBgColor,
    dateFullCellRender,
    dateCellRender,
    value,
    mode = 'month',
    actionLeftHeader,
    ...rest
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const [showValue, setValue] = useState<string| Dayjs | undefined>(value); // 主要用来展示数据和展示数据变化
  const [propsValue, setPropsValue] = useState<string| Dayjs | undefined>(value); // 选中的和props传过来的value
  const [swipeData, setSwipeData] = useState<dateType[][][]>([]);

  const prefix = getPrefixCls('calendar');

  useEffect(() => {
    if (mode === 'week') {
      const { currentWeek, prevWeek, nextWeek } = handleWeek(showValue, propsValue);
      setSwipeData([[prevWeek], [currentWeek], [nextWeek]]);
    } else {
      const preVal = dayjs(showValue).subtract(1, 'month');
      const nextVal = dayjs(showValue).add(1, 'month');
      const dataC = handleMonthData(showValue, propsValue); // 当前月
      const dataP = handleMonthData(preVal, propsValue); // 上个月
      const dataN = handleMonthData(nextVal, propsValue); // 下个月
      setSwipeData([dataP, dataC, dataN]);
    }
  }, [showValue, mode]);

  useEffect(() => {
    setValue(value);
    setPropsValue(value);
  }, [value]);

  return (
    <div {...rest} className={prefix}>
      <Header
        value={showValue}
        actionRightHeader={actionRightHeader}
        actionLeftHeader={actionLeftHeader}
        weeks={weeks}
      />
      <Body
        weeks={weeks}
        onChange={onChange}
        onSelect={onSelect}
        selectedBgColor={selectedBgColor}
        dateFullCellRender={dateFullCellRender}
        dateCellRender={dateCellRender}
        mode={mode}
        swipeData={swipeData}
        setValue={setValue}
        value={showValue}
        setPropsValue={setPropsValue}
      />
    </div>
  );
};

export default Calendar;
