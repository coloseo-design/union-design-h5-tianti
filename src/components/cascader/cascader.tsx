/* eslint-disable react/no-array-index-key */
import React, { useContext, useMemo } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import Popup from '../popup';
import CascaderPicker from '../picker/cascader';
import { CascaderProps } from './type';

const Cascader: React.FC<CascaderProps> = (props: CascaderProps) => {
  const {
    visible, onOk, onCancel, titles,
    itemHeight = 52,
    onChange,
    options,
    visibleItemCount = 6,
    value,
  } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('cascader');
  const titleCls = classNames(`${prefix}-title`);
  const Title = useMemo(() => (
    <div className={titleCls}>
      {
        (titles || []).map((item, key) => <div key={`${key}`} className={`${titleCls}-item`}>{item}</div>)
      }
    </div>
  ), [titleCls, titles]);
  return (
    <Popup
      header={Title}
      visible={visible}
      position="bottom"
      onCancel={onCancel}
      onOk={onOk}
    >
      <div className={prefix}>
        <CascaderPicker
          options={options}
          itemHeight={itemHeight || 44}
          visibleItemCount={visibleItemCount || 6}
          renderItem={(item) => item.value}
          value={value}
          onChange={onChange}
          // getStartOffset={() => 0}
        />
      </div>
    </Popup>
  );
};

export default Cascader;
