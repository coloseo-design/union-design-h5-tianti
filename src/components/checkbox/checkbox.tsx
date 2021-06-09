import React, { useContext, useEffect, useState } from 'react';
import classnames from 'classnames';
import warning from '../utils/warning';
import { CheckboxProps } from './type';
import Group, { Context } from './group';
import { ConfigContext } from '../config-provider/context';

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const {
    prefixCls: customizedPrefixCls,
    disabled = false,
    children,
    value = '',
    checked: checkedFromProps = false,
    onChange,
    ...rest
  } = props;

  const [checked, setChecked] = useState(checkedFromProps || false);
  useEffect(() => {
    setChecked(checkedFromProps);
  }, [checkedFromProps]);
  const checkboxGroupContext = useContext(Context);
  const onClick = () => {
    if (checkboxGroupContext && checkboxGroupContext.disabled) return;
    if (disabled) return;
    if (checkboxGroupContext && checkboxGroupContext.onChange) {
      checkboxGroupContext.onChange(value);
    }
    const toggleChecked = !checked;
    setChecked(toggleChecked);
    onChange && onChange(toggleChecked);
  };

  let aChecked = checked;
  const { getPrefixCls } = useContext(ConfigContext);
  // 如果value在checkboxGroup的value中，则选中
  if (checkboxGroupContext && checkboxGroupContext.value) {
    warning(!value, 'Checkbox嵌套在Group中须提供value');
    aChecked = checkboxGroupContext.value.indexOf(value) >= 0;
  }
  const prefix = getPrefixCls('checkbox', customizedPrefixCls);
  const className = classnames(prefix, {
    [`${prefix}-checked`]: aChecked,
    [`${prefix}-disabled`]: disabled,
  });
  const iconClassName = `${prefix}-icon`;
  return (
    <div {...rest} className={className} onClick={onClick}>
      <div className={iconClassName} />
      <span>
        {
          children
        }
      </span>

    </div>
  );
};

const ComposedCheckbox = Checkbox as typeof Checkbox & {
  Group: typeof Group;
};
ComposedCheckbox.Group = Group;

export default ComposedCheckbox;
