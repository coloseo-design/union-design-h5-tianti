import React from 'react';
import {
  NumberKeyBoard, Button, Toast, Divider,
} from '../index';
import './styles/index';

const KeyBoardDemo = () => {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const handleDelete = (value?: string) => {
    console.log('--value', value);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShow(true);
    setShow1(false);
    setShow2(false);
    setShow3(false);
  };
  const handleClick1 = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setShow(false);
    setShow1(true);
    setShow2(false);
    setShow3(false);
  };
  const handleClick2 = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setShow(false);
    setShow1(false);
    setShow2(true);
    setShow3(false);
  };
  const handleClick3 = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setShow(false);
    setShow1(false);
    setShow2(false);
    setShow3(true);
  };

  const handleInput = (value: unknown) => {
    Toast.info({ content: `${value}`, mask: false });
  };
  const containerStyle = {
    width: 377,
    height: 548,
    backgroundColor: '#fafafa',
    padding: 10,
    overflow: 'scroll',
    borderRadius: 12,
    boxShadow: '#ebedf0 0 4px 12px',
  };
  return (
    <div>
      <Button onClick={handleClick}>默认键盘1 </Button>
      <Divider style={{ margin: '32px 0px' }}>默认键盘</Divider>
      <Button onClick={handleClick1}>默认键盘2</Button>
      <Divider style={{ margin: '32px 0px' }}>默认键盘-带完成按钮</Divider>
      <Button onClick={handleClick2}>身份证键盘</Button>
      <Divider style={{ margin: '32px 0px' }}>身份证键盘</Divider>
      <Button onClick={handleClick3}>带title的键盘</Button>
      <Divider style={{ margin: '32px 0px' }}>带title的键盘</Divider>
      <NumberKeyBoard hideOnClickOutside={false} show={show} onBlur={() => setShow(false)} onInput={handleInput} />
      <NumberKeyBoard hideOnClickOutside show={show1} complete onBlur={() => setShow1(false)} onInput={handleInput} />
      <NumberKeyBoard hideOnClickOutside show={show2} extraKey="X" onBlur={() => setShow2(false)} onInput={handleInput} />
      <NumberKeyBoard
        show={show3}
        title="标题"
        hideOnClickOutside
        onBlur={() => setShow3(false)}
        value="12345"
        onDelete={handleDelete}
        onInput={handleInput}
      />
    </div>
  );
};

export default KeyBoardDemo;
