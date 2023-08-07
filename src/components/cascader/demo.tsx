import React, { useState } from 'react';
import { Cascader, Button } from '../index';
import { Option } from '../picker/type';
import './styles/index';
import '../button/styles/index';

const CascaderDemo = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const options: Option[] = [
    {
      title: '四川省',
      key: '四川省',
      value: '四川省',
      children: [
        {
          title: '成都市',
          key: '成都市',
          value: '成都市',
          children: [
            {
              title: '武侯区',
              key: '武侯区',
              value: '武侯区',
            },
            {
              title: '成华区',
              key: '成华区',
              value: '成华区',
            },
            {
              title: '锦江区',
              key: '锦江区',
              value: '锦江区',
            },
            {
              title: '天府新区',
              key: '天府新区',
              value: '天府新区',
            },
            {
              title: '高新区',
              key: '高新区',
              value: '高新区',
            },
          ],
        },
        {
          title: '南充市',
          key: '南充市',
          value: '南充市',
          children: [
            {
              title: '南充市区',
              key: '南充市区',
              value: '南充市区',
            },
            {
              title: '营山县',
              key: '营山县',
              value: '营山县',
            },
            {
              title: '南部县',
              key: '南部县',
              value: '南部县',
            },
          ],
        },
        {
          title: '巴中市',
          key: '巴中市',
          value: '巴中市',
          children: [
            {
              title: '通江县',
              key: '通江县',
              value: '通江县',
            },
            {
              title: '南江县',
              key: '南江县',
              value: '南江县',
            },
            {
              title: '平昌县',
              key: '平昌县',
              value: '平昌县',
            },
          ],
        },
      ],
    },
    {
      title: '云南省',
      key: '云南省',
      value: '云南省',
      children: [
        {
          title: '昆明市',
          key: '昆明市',
          value: '昆明市',
          children: [
            {
              title: '五华区',
              key: '五华区',
              value: '五华区',
            },
            {
              title: '盘龙区',
              key: '盘龙区',
              value: '盘龙区',
            },
            {
              title: '官渡区',
              key: '官渡区',
              value: '官渡区',
            },
            {
              title: '西山区',
              key: '西山区',
              value: '西山区',
            },
          ],
        },
        {
          title: '曲靖市',
          key: '曲靖市',
          value: '曲靖市',
          children: [
            {
              title: '麒麟区',
              key: '麒麟区',
              value: '麒麟区',
            },
            {
              title: '沾益区',
              key: '沾益区',
              value: '沾益区',
            },
            {
              title: '马龙区',
              key: '马龙区',
              value: '马龙区',
            },
          ],
        },
        {
          title: '玉溪市',
          key: '玉溪市',
          value: '玉溪市',
          children: [
            {
              title: '红塔区',
              key: '红塔区',
              value: '红塔区',
            },
            {
              title: '江川区',
              key: '江川区',
              value: '江川区',
            },
            {
              title: '通海县',
              key: '通海县',
              value: '通海县',
            },
          ],
        },
      ],
    },
    {
      title: '重庆市',
      key: '重庆市',
      value: '重庆市',
      children: [
        {
          title: '九龙区',
          key: '九龙区',
          value: '九龙区',
          children: [
            {
              title: '菜坪坝',
              key: '菜坪坝',
              value: '菜坪坝',
            }
          ],
        },
        {
          title: '黔江县',
          key: '黔江县',
          value: '黔江县',
          children: [
            {
              title: '黔江镇',
              key: '黔江镇',
              value: '黔江镇',
            },
            {
              title: '某某镇',
              key: '某某镇',
              value: '某某镇',
            },
          ],
        },
        {
          title: '秀山县',
          key: '秀山县',
          value: '秀山县',
          children: [
            {
              title: '清溪镇',
              key: '清溪镇',
              value: '清溪镇',
            }
          ],
        },
      ],
    },
    {
      title: '湖南省',
      value: '湖南省',
      key: '湖南省',
      children: [
        {
          title: '长沙市',
          value: '长沙市',
          key: '长沙市',
          children: [
            {
              title: '凤凰区',
              value: '凤凰区',
              key: '凤凰区',
            }
          ],
        }
      ],
    }
  ];
  const data = Array.from({ length: 4 }).map((_, k) => k);
  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开</Button>
      <Cascader
        titles={['省份', '城市', '区县']}
        visible={visible}
        options={options}
        onChange={(value) => console.log('values', value)}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        visibleItemCount={4}
      />
      <h2>带有标签的级联选择器</h2>
      <Button onClick={() => setVisible1(true)}>打开</Button>
      <Cascader
        titles={['请选择']}
        headers={['类目1', '类目2', '类目3']}
        visible={visible1}
        options={options}
        value={['云南省', '曲靖市', '马龙区']}
        onChange={(value) => console.log('values', value)}
        onOk={() => setVisible1(false)}
        onCancel={() => setVisible1(false)}
        visibleItemCount={6}
        extra={<div style={{ padding: 16, borderBottom: '10px solid rgb(245, 246, 246)'}}>
          <div style={{ color: '#A6A8A9', fontSize: 12 }}>热门标签</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 16, gap: 12 }}>
            {data.map((item) => (
              <Button key={item}>标签</Button>
            ))}
          </div>
        </div>}
      />
    </div>
  );
};

export default CascaderDemo;
