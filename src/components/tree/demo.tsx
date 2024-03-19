import React, { useState } from 'react';
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
          title: <div style={{ whiteSpace: 'pre-wrap' }}>联通数字科技有限公司本部联通数字科技有限公司本部</div>,
          key: `${key + 1}-2`,
          children: key === 3 ? [] : Array.from({ length: 3 }).map((_, i) => ({
            title: '管理层管理层管理层管理层管理层管理层管理层管理层管理层管理层',
            key: `${key + 1}-2-${i + 1}`,
            // isLeaf: true,
            children: [
              {
                title: <div style={{ whiteSpace: 'pre-wrap' }}>姓名(OA0010123312''姓名 (OA0010123312''姓名(OA0010123312)</div>,
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

  const [select, $select] = useState<string[]>(['1-2']);
  const [opens, $opens] = useState<string[]>(['1']);

  const onChange = (keys: string[], items: any[]) => {
    console.log('=>> change', keys, items);
  };

  const onSelect = (key: string, item: any) => {
    console.log('==select', key, item);
  };

  const onOpenChange = (keys: string[]) => {
    console.log('==openChange', keys);
  };

const [opens2, setOpen2] = useState<string[]>([]);
  return (
    <div style={{ margin: '0px -12px'}}>
      <h2>自定义事件和展开</h2>
      <Tree
        data={data}
        openKeys={opens2}
        multiple={false}
        onSelect={onSelect}
        onTitleClick={(current, e) => {
          e.stopPropagation();
          console.log('==title', current);
        }}
        onIconClick={(current, e) => {
          e.stopPropagation();
          if (opens2.includes(current.key)) {
            setOpen2(opens2.filter((i) => i !== current.key));
          } else {
            opens2.push(current.key)
            setOpen2([...opens2]);
          }
        }}
      />
      <h2>基本用法多选(默认就是多选)</h2>
      <button onClick={() => {$select(['3']); $opens(['2'])}}>change</button>
      <Tree
        data={data}
        openKeys={opens}
        defaultSelectedKeys={select}
        onChange={onChange}
        onSelect={onSelect}
        onOpenChange={(keys) => $opens(keys)}
      />
      <h2 style={{ marginTop: 24 }}>单选(默认就是多选)</h2>
      <Tree
        data={data}
        multiple={false}
        onChange={onChange}
        onSelect={onSelect}
        onOpenChange={onOpenChange}
        defaultSelectedKeys={['5']}
      />
      <h2>自定义内容</h2>
      <Tree
        defaultSelectedKeys={['11']}
        onChange={onChange}
        onOpenChange={onOpenChange}
        onSelect={onSelect}
      >
        <TreeNode key="1" title={<div style={{ whiteSpace: 'pre-wrap' }}>"一级列表""一级列表""一级列表"""一级列表""一级列表""一级列表""一级列表"一级列表""一级列表""一级列表""一级列表"</div>}>
        <TreeNode key="11" title="联通数字科技有限公司本部">
          <TreeNode key="123" title="管理层"></TreeNode>
          <TreeNode key="1234" title="基层"></TreeNode>
        </TreeNode>
        <TreeNode key="346" title="联通22" />
        </TreeNode>
        <TreeNode key="2" title="一级列表"></TreeNode>
        <TreeNode key="3" title="一级列表"></TreeNode>
      </Tree>
    </div>
  )
};

export default Demo;