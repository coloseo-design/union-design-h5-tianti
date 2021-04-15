import React from 'react';
import NumberKeyBoard from './index';
import Button from '../button';

const KeyBoardDemo = () => {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const handleDelete = (value?: string) => {
    console.log('--value', value);
  };
  const handleClose = () => {
    setShow(false);
    setShow1(false);
    setShow2(false);
    setShow3(false);
  };
  const handleClick = (e: any) => {
    e.stopPropagation();
    setShow(true);
    setShow1(false);
    setShow2(false);
    setShow3(false);
  };
  const handleClick1 = (e: any) => {
    e.stopPropagation();
    setShow(false);
    setShow1(true);
    setShow2(false);
    setShow3(false);
  };
  const handleClick2 = (e: any) => {
    e.stopPropagation();
    setShow(false);
    setShow1(false);
    setShow2(true);
    setShow3(false);
  };
  const handleClick3 = (e: any) => {
    e.stopPropagation();
    setShow(false);
    setShow1(false);
    setShow2(false);
    setShow3(true);
  };

  return (
    <div style={{ margin: 64 }}>
      <Button onClick={handleClick}>默认键盘1 </Button>
      <Button onClick={handleClick1}>默认键盘2</Button>
      <Button onClick={handleClick2}>身份证键盘</Button>
      <Button onClick={handleClick3}>带title的键盘</Button>
      <NumberKeyBoard show={show} onClose={handleClose} />
      <NumberKeyBoard show={show1} complete onClose={handleClose} />
      <NumberKeyBoard show={show2} extraKey="X" onClose={handleClose} />
      <NumberKeyBoard
        show={show3}
        title="标题"
        onClose={handleClose}
        value="12345"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default KeyBoardDemo;
