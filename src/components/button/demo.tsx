import React from 'react';
import { Button } from '../index';

const ButtonDemo: React.FC<unknown> = () => (
  <div>
    <div style={{ marginBottom: 10 }}>
      <Button type="default" style={{ marginRight: 10 }}>default</Button>
      <Button type="primary" style={{ marginRight: 10 }}>primary</Button>
      <Button type="danger" style={{ marginRight: 10 }}>danger</Button>
      <Button type="dashed" style={{ marginRight: 10 }}>dashed</Button>
      <Button type="link" style={{ marginRight: 10 }}>link</Button>
      <Button type="ghost" style={{ marginRight: 10 }}>ghost</Button>
      <Button type="primary" style={{ marginRight: 10 }} loading>loading</Button>
      <Button type="primary" style={{ marginRight: 10 }} disabled>disabled</Button>
    </div>

    <div style={{ marginBottom: 10 }}>
      <Button type="default" style={{ marginRight: 10 }} size="large">large default</Button>
      <Button type="primary" style={{ marginRight: 10 }} size="large">large primary</Button>
      <Button type="danger" style={{ marginRight: 10 }} size="large">large danger</Button>
      <Button type="dashed" style={{ marginRight: 10 }} size="large">large dashed</Button>
      <Button type="link" style={{ marginRight: 10 }} size="large">large link</Button>
      <Button type="ghost" style={{ marginRight: 10 }} size="large">large ghost</Button>
      <Button type="primary" style={{ marginRight: 10 }} size="large" loading>large loading</Button>
      <Button type="primary" style={{ marginRight: 10 }} size="large" disabled>large disabled</Button>
    </div>

    <div style={{ marginBottom: 10 }}>
      <Button type="default" style={{ marginRight: 10 }} size="small">small default</Button>
      <Button type="primary" style={{ marginRight: 10 }} size="small">small primary</Button>
      <Button type="danger" style={{ marginRight: 10 }} size="small">small danger</Button>
      <Button type="dashed" style={{ marginRight: 10 }} size="small">small dashed</Button>
      <Button type="link" style={{ marginRight: 10 }} size="small">small link</Button>
      <Button type="ghost" style={{ marginRight: 10 }} size="small">small ghost</Button>
      <Button type="primary" style={{ marginRight: 10 }} size="small" loading>small loading</Button>
      <Button type="primary" style={{ marginRight: 10 }} size="small" disabled>small disabled</Button>
    </div>
    <div style={{ display: 'flex' }}>
      <Button type="primary" block style={{ marginRight: 10 }}>block primary</Button>
      <Button type="danger" block style={{ marginRight: 10 }}>block danger</Button>
    </div>
  </div>
);

export default ButtonDemo;
