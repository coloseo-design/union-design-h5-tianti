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
  return (
    <div style={{ margin: 64 }}>
      <Button onClick={() => setShow(true)} style={{ width: 'fix-content' }}>基本的1键盘 click me </Button>
      <Button onClick={() => setShow1(true)}>基本的2键盘 click me</Button>
      <Button onClick={() => setShow2(true)}>身份证键盘 click me</Button>
      <Button onClick={() => setShow3(true)}>带title的键盘 click me</Button>
      <NumberKeyBoard show={show} onClose={handleClose} />
      {/* <NumberKeyBoard show={show1} complete onClose={handleClose} />
      <NumberKeyBoard show={show2} extraKey="X" onClose={handleClose} />
      <NumberKeyBoard
        show={show3}
        title="标题"
        onClose={handleClose}
        value="12345"
        onDelete={handleDelete}
      /> */}
    </div>
  );
};

export default KeyBoardDemo;
