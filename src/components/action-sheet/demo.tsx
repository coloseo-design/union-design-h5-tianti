import React, { useState } from 'react';
import { Button, Divider, ActionSheet } from '../index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const DemoAction = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const options = [
    {
      name: '操作一',
      mainOperation: true,
    },
    {
      name: '操作二',
    },
    {
      name: '操作三',
    },
    {
      name: '操作四',
    },
  ];
  const option1 = [
    { name: '微信', src: 'https://img01.yzcdn.cn/vant/custom-icon-light.png' },
    { name: '微博', src: 'https://img01.yzcdn.cn/vant/custom-icon-water.png' },
    { name: '复制链接', src: 'https://img01.yzcdn.cn/vant/custom-icon-fire.png' },
    { name: '分享海报', src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' },
    { name: '头像', src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
    { name: '图片', src: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png', type: 'img' },
    { name: 'logo', src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', type: 'img' },
    { name: 'react', src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg', type: 'img' },
    { name: '百度图片嘿嘿嘿444444党的十五大的', src: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF', type: 'img' },
    { name: '图片', src: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png', type: 'img' },
    { name: 'logo', src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', type: 'img' },
    { name: 'react', src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg', type: 'img' },
    { name: '百度图片嘿嘿嘿444444党的十五大的', src: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF', type: 'img' },
  ];

  const opti12 = [
    { name: '图片', src: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png', type: 'img' },
    { name: 'logo', src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', type: 'img' },
    { name: 'react', src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg', type: 'img' },
    { name: '百度图片嘿嘿嘿444444党的十五大的', src: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF', type: 'img' },
    { name: '图片', src: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png', type: 'img' },
    { name: 'logo', src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', type: 'img' },
    { name: 'react', src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg', type: 'img' },
    { name: '百度图片嘿嘿嘿444444党的十五大的', src: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF', type: 'img' },
    { name: '图片', src: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png', type: 'img' },
    { name: 'logo', src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', type: 'img' },
    { name: 'react', src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg', type: 'img' },
    { name: '百度图片嘿嘿嘿444444党的十五大的', src: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF', type: 'img' },
    { name: '图片', src: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png', type: 'img' },
    { name: 'logo', src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', type: 'img' },
    { name: 'react', src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg', type: 'img' },
    { name: '百度图片嘿嘿嘿444444党的十五大的', src: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF', type: 'img' },
  ];
  return (
    <div style={containerStyle}>
      <Button onClick={() => { setVisible(true); }}>基本样式</Button>
      <Divider style={{ margin: '32px 0px' }}>基本操作样式</Divider>
      <Button onClick={() => setVisible1(true)}>上传面板</Button>
      <Divider style={{ margin: '32px 0px' }}>上传面板样式</Divider>
      <Button onClick={() => setVisible2(true)}>分享面板</Button>
      <Divider style={{ margin: '32px 0px' }}>分享面板样式</Divider>
      <Button onClick={() => setVisible3(true)}>多行分享面板</Button>
      <Divider style={{ margin: '32px 0px' }}>多行分享面板样式</Divider>
      <Button onClick={() => setVisible4(true)}>指定每行数量面板</Button>
      <Divider style={{ margin: '32px 0px' }}>指定每行数量面板</Divider>
      <ActionSheet
        visible={visible}
        onCancel={() => setVisible(false)}
        options={options}
      />
      <ActionSheet
        visible={visible1}
        onCancel={() => setVisible1(false)}
        options={opti12}
        type="upload"
        title="上传面板"
      />
      <ActionSheet
        visible={visible2}
        onCancel={() => setVisible2(false)}
        options={option1.filter((i: any) => i.type !== 'img')}
        type="share"
        title="分享到："
      />
      <ActionSheet
        visible={visible3}
        onCancel={() => setVisible3(false)}
        options={option1.filter((i: any) => i.type !== 'img')}
        type="share"
        title="分享到："
        multiple
      />
      <ActionSheet
        visible={visible4}
        onCancel={() => setVisible4(false)}
        options={option1}
        type="upload"
        title="多行分享："
        multiple
        currentCol={{ image: 5, icon: 5 }}
      />
    </div>

  );
};

export default DemoAction;
