import React from 'react';
import ReactIcon, { BaseIconProps } from '@uni/icons-react-h5';

export interface TransferLocale {
  icon: string;
}

export interface IconProps extends Pick<BaseIconProps, 'onClick'> {
  type?: string;
  className?: string;
  spin?: boolean;
  style?: React.CSSProperties;
  ref?: React.ForwardedRef<HTMLSpanElement>
}

const Icon = (props: Omit<IconProps, 'ref'>, ref: React.ForwardedRef<HTMLSpanElement>) => {
  const { type = 'add', spin = false, ...rest } = props;
  return <ReactIcon {...rest} spin={type?.startsWith('loading') ? true : spin} ref={ref} name={type} />;
};

export default React.forwardRef(Icon);
