import React from 'react';
import { Button } from '../index';

const style = {
  marginBottom: 10,
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
const ButtonDemo: React.FC<unknown> = () => (
  <div style={containerStyle}>
    <div style={{ marginBottom: 10 }}>
      <Button type="default" style={style} block>default</Button>
      <Button type="primary" style={style} block>primary</Button>
      <Button type="danger" style={style} block>danger</Button>
      <Button type="dashed" style={style} block>dashed</Button>
      <Button type="link" style={style} block>link</Button>
      <Button type="ghost" style={style} block>ghost</Button>
      <Button type="primary" style={style} loading block>loading</Button>
      <Button type="primary" style={style} disabled block>disabled</Button>
    </div>

    <div style={{ marginBottom: 10 }}>
      <Button type="default" style={style} size="large" block>large default</Button>
      <Button type="primary" style={style} size="large" block>large primary</Button>
      <Button type="danger" style={style} size="large" block>large danger</Button>
      <Button type="dashed" style={style} size="large" block>large dashed</Button>
      <Button type="link" style={style} size="large" block>large link</Button>
      <Button type="ghost" style={style} size="large" block>large ghost</Button>
      <Button type="primary" style={style} size="large" loading block>large loading</Button>
      <Button type="primary" style={style} size="large" disabled block>large disabled</Button>
    </div>

    <div style={{ marginBottom: 10 }}>
      <Button type="default" style={style} size="small" block>small default</Button>
      <Button type="primary" style={style} size="small" block>small primary</Button>
      <Button type="danger" style={style} size="small" block>small danger</Button>
      <Button type="dashed" style={style} size="small" block>small dashed</Button>
      <Button type="link" style={style} size="small" block>small link</Button>
      <Button type="ghost" style={style} size="small" block>small ghost</Button>
      <Button type="primary" style={style} size="small" loading block>small loading</Button>
      <Button type="primary" style={style} size="small" disabled block>small disabled</Button>
    </div>
    <div>
      <Button type="primary" block style={style}>block primary</Button>
      <Button type="danger" block style={style}>block danger</Button>
    </div>
  </div>
);

export default ButtonDemo;
