import React from 'react';
import DropdownMenu, { DropdownItem } from './index';
import Icon from '../icon';
import Button from '../button';

export default () => {
  const option = [
    {
      text:
      '全部商品',
      value: '0',
      icon: <Icon type="user" />,
      children: [
        {
          text: '第一类',
          value: 'first',
        },
      ],
    },
    { text: '新款商品', value: '1' },
    { text: '活动商品', value: '2' },
  ];

  const option2 = [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ];
  const option3 = [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序1', value: 'c' },
    { text: '销量排序2', value: 'd' },
    { text: '销量排序3', value: '3' },
    { text: '销量排序4', value: '4' },
    { text: '销量排序5', value: '1' },
    { text: '销量排序6', value: '6' },
    { text: '销量排序7', value: '0' },
  ];
  const onChange = (value: string) => {
    console.log('--value', value);
  };
  const [toggle, setToggle] = React.useState(false);
  const handleToggle = () => {
    setToggle(true);
  };

  const handleButton = () => {
    setToggle(false);
  };

  return (
    <div style={{ margin: 64 }}>
      <h1>基本用法</h1>
      <DropdownMenu>
        <DropdownItem value="b" options={option2} />
        <DropdownItem value="c" options={option3} />
      </DropdownMenu>
      <div style={{ marginTop: 32 }}>
        <h1>向上弹出</h1>
        <DropdownMenu direction="up">
          <DropdownItem options={option} onChange={onChange} />
          <DropdownItem value="b" options={option3} />
        </DropdownMenu>
      </div>
      <div style={{ marginTop: 32 }}>
        <h1>自定义选中状态颜色</h1>
        <DropdownMenu activeColor="rgb(25, 137, 250)">
          <DropdownItem options={option} onChange={onChange} />
          <DropdownItem value="b" options={option2} />
          <DropdownItem value="0" options={option3} />
        </DropdownMenu>
      </div>
      <div style={{ marginTop: 32 }}>
        <h1>禁止菜单</h1>
        <DropdownMenu activeColor="rgb(25, 137, 250)">
          <DropdownItem options={option} disabled />
          <DropdownItem value="b" options={option2} disabled />
        </DropdownMenu>
      </div>
      <div style={{ marginTop: 32 }}>
        <h1>自定义菜单内容</h1>
        <DropdownMenu>
          <DropdownItem options={option} />
          <DropdownItem title="筛选" toggle={toggle} onClick={handleToggle}>
            <div style={{ padding: '0px 32px' }}>
              <div title="包邮" style={{ height: 52 }}>包邮</div>
              <div title="团购" style={{ height: 52 }}>团购</div>
              <Button type="primary" onClick={handleButton}>和哈哈哈哈</Button>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </div>
    </div>
  );
};
