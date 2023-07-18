import React from 'react';
import {
  DropdownMenu, Collapse,
} from '../index';
import './styles/index';
import '../collapse/styles/index';

const { DropdownItem } = DropdownMenu;

const Demo = () => {
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

  const [toggle, setToggle] = React.useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleButton = () => {
    setToggle(false);
  };

  const [testDis, setDis] = React.useState(true);
  const [testDis1, setDis1] = React.useState(false);

  return (
    <div>
      <h1>基本用法</h1>
      <DropdownMenu>
        <DropdownItem value="b" options={option2} />
        <DropdownItem options={option3} />
      </DropdownMenu>
      <div style={{ marginTop: 32 }}>
        <h1>自定义菜单内容</h1>
        <DropdownMenu>
          <DropdownItem value="b" options={option2} />
          <DropdownItem title="筛选" toggle={toggle} onClick={handleToggle}>
            <Collapse activeKey={1} accordion style={{ marginTop: 50 }}>
              <Collapse.Panel header="类别(#N)1" key={1}>
                <div onClick={handleButton}>
                  我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                  我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                  我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                  我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                </div>
              </Collapse.Panel>
              <Collapse.Panel header="类别(#N)2" key={2}>
                我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
                我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
              </Collapse.Panel>
            </Collapse>
          </DropdownItem>
        </DropdownMenu>
      </div>
      <div style={{ marginTop: 32 }}>
        <h1>禁止菜单</h1>
        <button onClick={() => { setDis(!testDis); setDis1(!testDis1)}}>change disabled</button>
        <DropdownMenu>
          <DropdownItem value='a' options={option2} disabled={testDis} />
          <DropdownItem value='c' options={option2} disabled={testDis} />
          <DropdownItem value="b" options={option2} disabled={testDis1} />
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Demo;
