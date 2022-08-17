/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import React, { ReactNode, useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import { dateType, CalendarMode, weekType } from './calendar';
import Swipe from '../swipe';

export interface BodyProps {
  mode?: CalendarMode;
  weeks: weekType[];
  onChange?: (date: Dayjs) => void;
  onSelect?: (date: Dayjs) => void;
  selectedBgColor?: string;
  dateFullCellRender?: (date: Dayjs) => ReactNode;
  dateCellRender?: (date: Dayjs) => ReactNode;
  swipeData?: dateType[][][];
  setValue: (value: Dayjs | string) => void;
  setPropsValue: (value: Dayjs | string) => void;
  value?: string | Dayjs;
}

const BodyC: React.FC<BodyProps> = (props: BodyProps) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('calendar-body');
  const {
    onChange, onSelect,
    weeks, mode, selectedBgColor,
    dateFullCellRender, dateCellRender,
    swipeData = [],
    setValue,
    value,
    setPropsValue,
  } = props;

  const handleBody = (current: dateType) => (e: React.MouseEvent) => {
    e.preventDefault();
    onChange && onChange(current.date);
    onSelect && onSelect(current.date);
    setValue(current.date);
    setPropsValue(current.date);
  };

  const handlChange = (_: number, direction?: string) => {
    if (direction === 'next') {
      mode === 'month' && setValue(dayjs(value).add(1, 'month'));
      mode === 'week' && setValue(dayjs(value).add(7, 'day'));
    }
    if (direction === 'prev') {
      mode === 'month' && setValue(dayjs(value).subtract(1, 'month'));
      mode === 'week' && setValue(dayjs(value).subtract(7, 'day'));
    }
  };

  return (
    <div className={prefix}>
      <div className={`${prefix}-header`}>
        {weeks.map((item) => <div key={item.key}>{item.value}</div>)}
      </div>
      <Swipe autoplay={false} onChange={handlChange} isTips={false} onfilterList={() => 0}>
        {swipeData.map((swipe: dateType[][], sx: number) => (
          <div
            className={`${prefix}-body`}
            key={sx}
          >
            {swipe.map((tr: dateType[], index: number) => {
              return (
                <div key={index} className={`${prefix}-body-row`}>
                  {(tr || []).map((td: dateType, idx: number) => (
                    <div key={idx} className={`${prefix}-body-col`}>
                      {(mode === 'week' ? 1 : td?.type === 'current') && (
                      <div
                        onClick={handleBody(td)}
                        className={classNames(`${prefix}-cell`, {
                          [`${prefix}-gray`]: td?.gray,
                          [`${prefix}-selected`]: td.selected,
                          [`${prefix}-today`]: td.today,
                        })}
                        style={{ backgroundColor: selectedBgColor }}
                      >
                        {(dateFullCellRender && dateFullCellRender(td.date)) || (
                        <>
                          <div
                            className={classNames(`${prefix}-cell-gregotian`)}
                          >
                            {td.current}
                          </div>
                          <div
                            className={classNames(`${prefix}-cell-lunar`)}
                          >
                            {td.solarTerm || (td.lunarDayCn === '初一' ? td.lunarMonthCn : td.lunarDayCn)}
                          </div>
                          {dateCellRender && dateCellRender(td.date)}
                        </>
                        )}
                      </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </Swipe>
    </div>
  );
};

export default BodyC;
