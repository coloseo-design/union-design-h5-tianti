/* eslint-disable react/no-array-index-key */
import React, {
  useContext, useEffect, useMemo, useRef, useState,
} from 'react';
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
    extra,
    headers = [],
  } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('cascader');
  const titleCls = classNames(`${prefix}-title`);
  const extraRef = useRef<HTMLDivElement | null>();
  const [extraHeight, setHeight] = useState(0);
  const Title = useMemo(() => (
    <div className={titleCls}>
      {
        (titles || []).map((item, key) => <div key={key} className={`${titleCls}-item`}>{item}</div>)
      }
    </div>
  ), [titleCls, titles]);
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        if (extraRef.current) {
          setHeight((extraRef.current as HTMLElement).getBoundingClientRect().height - itemHeight);
        }
      });
    }
  }, [visible]);
  return (
    <Popup
      header={titles ? Title : '请选择'}
      visible={visible}
      position="bottom"
      onCancel={onCancel}
      onOk={onOk}
    >
      {extra && <div ref={extraRef as any}>{extra}</div>}
      {headers && headers?.length > 0 && (
      <div className={`${prefix}-headers`}>
        {(headers || []).map((item, key) => (
          <div key={key} className={`${prefix}-headers-item`}>
            {item}
          </div>
        ))}
      </div>
      )}
      <div className={prefix}>
        <CascaderPicker
          options={options}
          itemHeight={itemHeight || 52}
          visibleItemCount={visibleItemCount || 6}
          renderItem={(item) => item.value}
          value={value}
          onChange={onChange}
          getStartOffset={() => (itemHeight * (visibleItemCount - 1)) / 2 - extraHeight}
          // getStartOffset={() => 0}
        />
      </div>
    </Popup>
  );
};

export default Cascader;
