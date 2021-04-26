import React, { useState } from 'react';
import ActionSheet from './index';
import Button from '../button';
import Icon from '../icon';

const DemoAction = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
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
    { name: '二维码', src: <Icon type="user-circle" /> },
    { name: '头像', src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
    { name: '图片', src: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png', type: 'img' },
    { name: 'logo', src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', type: 'img' },
    { name: 'react', src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg', type: 'img' },
    { name: '百度图片嘿嘿嘿444444党的十五大的', src: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF', type: 'img' },
  ];
  return (
    <div>
      <Button onClick={() => { setVisible(true); }}>基本样式</Button>
      <Button onClick={() => setVisible1(true)}>上传面板</Button>
      <Button onClick={() => setVisible2(true)}>分享面板</Button>
      <ActionSheet
        visible={visible}
        onCancel={() => setVisible(false)}
        options={options}
      />
      <ActionSheet
        visible={visible1}
        onCancel={() => setVisible1(false)}
        options={option1}
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
    </div>

  );
};

export default DemoAction;
