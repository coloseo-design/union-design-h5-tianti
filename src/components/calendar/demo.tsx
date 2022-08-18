import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { Calendar, DropdownMenu, Button } from '..';
import './styles/index';
const { DropdownItem } = DropdownMenu;

const CalendarDemo = () => {
  const [value, $val] = React.useState<Dayjs | string | undefined>();
  const [mode, $mode] = React.useState<'week' | 'month'>('week');
  const option = [
    { text: '1月', value: '1' },
    { text: '2月', value: '2' },
    { text: '3月', value: '3' },
    { text: '4月', value: '4' },
    { text: '5月', value: '5' },
    { text: '6月', value: '6' },
    { text: '7月', value: '7' },
  ];
  const handleChange = (date: Dayjs) => {
    $val(date);
  };

  const onChange = (v: string) => {
    $val(`2022-${v}-15`);
  }
  return (
    <div style={{ marginTop: 32 }}>
        <Button onClick={() => $mode('month')}>改变mode</Button>
        <h2>mode === 'week'</h2>
        <Calendar
          actionRightHeader="全部日程"
          mode={mode}
          dateCellRender={(date: Dayjs) => {
            if (dayjs(date).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')) {
              return <div style={{
                position: 'absolute',
                bottom: -12,
                left: '45%',
                width: 8,
                height: 8,
                backgroundColor: '#A6A8A9',
                borderRadius: '50%',
              }} />
            }
            return null
          }}
        />
        <h2 style={{ marginTop: 52 }}>mode === 'month'</h2>
        <Calendar
          actionRightHeader="全部日程"
          dateCellRender={(date: Dayjs) => {
            if (dayjs(date).format('YYYY-MM-DD') === dayjs('2022-08-25').format('YYYY-MM-DD')) {
              return <div style={{
                position: 'absolute',
                bottom: -12,
                left: '45%',
                width: 8,
                height: 8,
                backgroundColor: '#A6A8A9',
                borderRadius: '50%',
              }} />
            }
            return null
          }}
        />
        <h2 style={{ marginTop: 52 }}>自定义header</h2>
        <Calendar
          actionRightHeader="全部日程"
          actionLeftHeader={<div style={{ display: 'flex' }}>
            <div style={{ marginTop: 15 }}>{dayjs(value).format('YYYY-MM-DD')}</div>
            <DropdownMenu style={{ width: 80 }}>
              <DropdownItem options={option} onChange={onChange} />
            </DropdownMenu>
          </div>}
          value={value}
          onChange={handleChange}
          dateCellRender={(date: Dayjs) => {
            if (dayjs(date).format('YYYY-MM-DD') === dayjs('2022-08-25').format('YYYY-MM-DD')) {
              return <div style={{
                position: 'absolute',
                bottom: -12,
                left: '45%',
                width: 8,
                height: 8,
                backgroundColor: '#A6A8A9',
                borderRadius: '50%',
              }} />
            }
            return null
          }}
        />
    </div>
  )
};

export default CalendarDemo;