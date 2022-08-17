/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import { weekType } from './calendar';

export interface HeaderProps {
  actionRightHeader?: string | React.ReactNode;
  actionLeftHeader?: string | React.ReactNode;
  value?: Dayjs | string;
  weeks?: weekType[];
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {
    actionRightHeader, value, actionLeftHeader, weeks = [],
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('calendar');
  const week = weeks[dayjs(value).day()];

  return (
    <div className={classNames(`${prefix}-header`)}>
      <div>
        {actionLeftHeader || `${dayjs(value).format('YYYY年M月DD日')} ${week && week.week}`}
      </div>
      <div className={classNames(`${prefix}-header-right`)}>{actionRightHeader}</div>
    </div>
  );
};

export default Header;
