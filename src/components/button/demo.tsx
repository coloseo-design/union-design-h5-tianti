import React from 'react';
import { Button, Icon } from '../index';
import './styles/index';
import '../icon/styles/index';

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
  <div>
    <div style={{ marginBottom: 10 }}>
      <h5>大尺寸</h5>
      <Button type="primary" style={style} block size="large">主按钮(大)</Button>
      <Button type="primary" style={style} block disabled size="large">主按钮禁用(大)</Button>
      <Button type="default" style={style} block size="large">次按钮(大)</Button>
      <Button type="default" style={style} block disabled size="large">次按钮禁用(大)</Button>
      <Button type="light" style={style} block size="large">幽灵按钮(大)</Button>
      <Button type="light" style={style} block disabled size="large">幽灵按钮禁用(大)</Button>
      <Button type="link" style={style} block size="large" href="#">link</Button>
      <Button type="link" style={style} block disabled size="large" href="#">link</Button>
    </div>

    <div style={{ marginBottom: 10 }}>
      <h5>loading状态</h5>
      <Button type="primary" style={style} loading block size="large">主按钮(大)</Button>
      <Button type="light" style={style} loading block size="large">轻按钮(大)</Button>
      <Button type="default" style={style} loading block size="large">次按钮(大)</Button>
    </div>

    <div style={{ marginBottom: 10 }}>
      <h5>带图标按钮</h5>
      <Button type="primary" style={style} icon="add" block size="large">主按钮(大)</Button>
      <Button type="primary" style={style} icon="add" block disabled size="large">主按钮禁用(大)</Button>
      <Button type="default" style={style} icon="add" block size="large">次按钮(大)</Button>
      <Button type="default" style={style} icon="add" block disabled size="large">次按钮禁用(大)</Button>
    </div>

    <div style={{ marginBottom: 10 }}>
      <h5>中尺寸</h5>
      <Button type="primary" style={style} block>主按钮(中)</Button>
      <Button type="primary" style={style} block disabled>主按钮禁用(中)</Button>
      <Button type="default" style={style} block>次按钮(中)</Button>
      <Button type="default" style={style} block disabled>次按钮禁用(中)</Button>
      <Button type="link" style={style} block href="#">link</Button>
      <Button type="link" style={style} block disabled href="#">link</Button>
    </div>

    <div style={{ marginBottom: 10 }}>
      <h5>响应式尺寸(大按钮)</h5>
      <Button type="primary" style={style} size="large">主按钮(大)</Button>
      <Button type="primary" style={style} disabled size="large">主按钮禁用(大)</Button>
      <Button type="default" style={style} size="large">次按钮(大)</Button>
      <Button type="default" style={style} disabled size="large">次按钮禁用(大)</Button>
      <Button type="link" style={style} block href="#" size="large">link</Button>
      <Button type="link" style={style} block disabled href="#" size="large">link</Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <h5>响应式尺寸(中按钮)</h5>
      <Button type="primary" style={style}>主按钮</Button>
      <Button type="primary" style={style} disabled>主按钮禁用</Button>
      <Button type="default" style={style}>次按钮</Button>
      <Button type="default" style={style} disabled>次按钮禁用</Button>
      <Button type="link" style={style} block href="#">link</Button>
      <Button type="link" style={style} block disabled href="#">link</Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <h5>响应式尺寸(小按钮)</h5>
      <Button type="primary" style={style} size="small">主按钮(小)</Button>
      <Button type="primary" style={style} disabled size="small">主按钮禁用(小)</Button>
      <Button type="default" style={style} size="small">次按钮(小)</Button>
      <Button type="default" style={style} disabled size="small">次按钮禁用(小)</Button>
      <Button type="link" style={style} block href="#" size="small">link</Button>
      <Button type="link" style={style} block disabled href="#" size="small">link</Button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <h5>图形</h5>
      <Button style={style} shape="circle" size="small">
        <Icon type="add" />
      </Button>
      <Button style={style} shape="circle" size="large">
        <Icon type="add" />
      </Button>
      <Button style={style} shape="circle">
        <Icon type="add" />
      </Button>
      <Button style={style} shape="circle" size="small" disabled>
        <Icon type="add" />
      </Button>
      <Button style={style} shape="circle" size="large" disabled>
        <Icon type="add" />
      </Button>
      <Button style={style} shape="circle" disabled>
        <Icon type="add" />
      </Button>
    </div>
  </div>
);

export default ButtonDemo;
