import React, { useContext, useEffect, useState } from 'react';
import classnames from 'classnames';
import omit from 'omit.js';
import warning from '../utils/warning';
import { RadioGroupProps, RadioProps } from './type';
import Group, { Context } from './group';
import { ConfigContext } from '../config-provider/context';

const Radio: React.FC<RadioProps> | {Group: RadioGroupProps} = (props: RadioProps) => {
  const {
    checked: checkedFromProps = false,
    defaultChecked = false,
    disabled = false,
    onChange,
    children,
    value = '',
    prefixCls: customizedPrefixCls,
    className: customizedClassName,
    ...rest
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const [checked, setChecked] = useState(checkedFromProps || defaultChecked || false);

  useEffect(() => {
    setChecked(checkedFromProps);
  }, [checkedFromProps]);
  const radioGroupContext = useContext(Context);

  const onClick = () => {
    if (radioGroupContext && radioGroupContext.disabled) return;
    if (disabled) return;
    if (radioGroupContext && radioGroupContext.onChange) {
      radioGroupContext.onChange(value);
    }
    const toggleChecked = !checked;
    setChecked(toggleChecked);
    onChange && onChange(toggleChecked);
  };

  let isItemChecked = checked;
  if (radioGroupContext && radioGroupContext.value) {
    warning(!value, 'Radio嵌套在Group中须提供value');
    isItemChecked = radioGroupContext.value === value;
  }
  const prefix = getPrefixCls('radio', customizedPrefixCls);
  const className = classnames(prefix, {
    [`${prefix}-checked`]: isItemChecked,
    [`${prefix}-disabled`]: disabled,
  }, customizedClassName);
  const iconClassName = `${prefix}-icon`;
  const otherProps = omit(rest, []);
  return (
    <div {...otherProps} className={className} onClick={onClick}>
      <div className={iconClassName} />
      <span>
        {
          children
        }
      </span>
    </div>
  );
};

const ComposedRadio = Radio as typeof Radio & {
  Group: typeof Group;
};

ComposedRadio.Group = Group;

export default ComposedRadio;
