import React from 'react';
import { Title, Icon } from '..';
import './styles/index';

export default () => {
  const leftIcon = <div style={{ width: 16, height: 16, borderRadius: 4, background: '#A6A8A9' }} />
  return (
    <div style={{ background: 'rgb(245, 246, 246)', margin: '0px -12px'}}>
      <h2>默认表头</h2>
      <Title title="标题文字" style={{ margin: '24px 0px' }} />
      <Title title="标题文字" style={{ margin: '24px 0px' }} leftIcon={leftIcon} />
      <Title title="标题文字" style={{ margin: '24px 0px' }} leftIcon={leftIcon} rightIcon={<Icon type='down2-line' style={{ fontSize: 14 }} />} />
      <Title title="标题文字" style={{ margin: '24px 0px' }} leftIcon={leftIcon} rightIcon={<a>按钮</a>} />
      <h2>size=md样式</h2>
      <Title title="标题文字" size="md" style={{ margin: '24px 0px' }} />
      <Title title="标题文字" size="md"  style={{ margin: '24px 0px' }} leftIcon={leftIcon} />
      <Title title="标题文字" size="md"  style={{ margin: '24px 0px' }} leftIcon={leftIcon} rightIcon={<Icon type='down2-line' style={{ fontSize: 14 }} />} />
      <Title title="标题文字" size="md"  style={{ margin: '24px 0px' }} leftIcon={leftIcon} rightIcon={<a>按钮</a>} />
      <Title title="标题文字" size="md" style={{ margin: '24px 0px' }} rightIcon={<Icon type="delete-surface" />} />
    </div>
  )
}