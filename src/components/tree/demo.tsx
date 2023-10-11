import React, { useState, useEffect } from 'react';
import { Tree } from '..';
import './styles/index';

const Demo = () => {
  const { TreeNode } = Tree;
  const data = Array.from({ length: 5 }).map((_, key) => (
    {
      title: '一级列表',
      key: `${key + 1}`,
      children: key === 4 ? [] : [
        {
          title: '联通数字科技有限公司本部',
          key: `${key + 1}-2`,
          children: Array.from({ length: 3 }).map((_, i) => ({
            title: '管理层',
            key: `${key + 1}-2-${i + 1}`,
            children: [
              {
                title: '姓名  （OA0010123312）',
                key: `${key + 1}-2-${i + 1}-leaf`,
              },
              {
                title: '姓名  （OA0010123312）',
                key: `${key + 1}-2-${i + 1}-leaf1`,
              },
            ],
          }))
        }
      ]
    }
  ));

  const [select, $select] = useState<string[]>([]);

  const onChange = (keys: string[], items: any[]) => {
    console.log('=>> change', keys, items);
  };

  const onSelect = (key: string, item: any) => {
    console.log('==select', key, item);
  };

  const onOpenChange = (keys: string[]) => {
    console.log('==openChange', keys);
  };

  const [data1, setData] = useState<any[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      setData(data);
      $select(['1-2']);
    }, 2000);
  }, []);
  return (
    <div style={{ margin: '0px -12px'}}>
      <h2>多选(默认就是多选)</h2>
      <button onClick={() => $select(['2'])}>change</button>
      <Tree
        data={data1}
        defaultOpenKeys={['1']}
        selectedKeys={select}
        onChange={onChange}
        onSelect={onSelect}
        onOpenChange={onOpenChange}
      />
      <h2 style={{ marginTop: 24 }}>单选(默认就是多选)</h2>
      <Tree
        data={data}
        multiple={false}
        onChange={onChange}
        onSelect={onSelect}
        onOpenChange={onOpenChange}
      />
      <h2>自定义内容</h2>
      <Tree
        selectedKeys={['3']}
        onChange={onChange}
        onOpenChange={onOpenChange}
        onSelect={onSelect}
      >
        <TreeNode key="1" title="一级列表">
        <TreeNode key="11" title="联通数字科技有限公司本部">
          <TreeNode key="123" title="管理层"></TreeNode>
          <TreeNode key="1234" title="基层"></TreeNode>
        </TreeNode>
        <TreeNode key="346" title="联通数字科技有限公司本部1" />
        </TreeNode>
        <TreeNode key="2" title="一级列表"></TreeNode>
        <TreeNode key="3" title="一级列表"></TreeNode>
      </Tree>
    </div>
  )
};

export default Demo;