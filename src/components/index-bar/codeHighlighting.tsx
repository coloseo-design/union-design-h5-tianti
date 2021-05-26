/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import Highlight from 'react-highlight';
import Icon from '../icon';

const codeDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div style={{
        border: '1px solid #E8E7E7', padding: 12, textAlign: 'right',
      }}
      >
        <Icon type="productd-evelop" style={{ fontSize: 20 }} onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div style={{ border: '1px solid #E8E7E7', borderTop: 'none', background: '#fff' }}>
          <Highlight>
            {"import React, { ReactNode, useCallback, useMemo } from 'react';\nimport IndexBar from './index-bar';\n\nexport const Demo = () => {\n  const getRandom = useCallback(\n    (min: number, max: number) => Math.random() * (max - min) + min,\n    [],\n  );\n\n  const content = useMemo(() => {\n    const list = [] as ReactNode[];\n    for (let i = 65; i < 91; i += 1) {\n      list.push(<IndexBar.Anchor key={`${i}-anchor`} id={String.fromCharCode(i)} />);\n      list.push(\n        <div\n          key={`${i}-content`}\n          style={{\n            height: 400,\n            backgroundColor: `rgba(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)}, 0.2)`,\n          }}\n        />,\n      );\n    }\n    return list;\n  }, [getRandom]);\n\n  return (\n    <>\n      <div\n        style={{\n          margin: 40,\n          width: 360,\n          height: 700,\n          border: '1px solid black',\n          display: 'flex',\n          flexFlow: 'column',\n          alignItems: 'center',\n        }}\n      >\n        <IndexBar>\n          {content}\n        </IndexBar>\n      </div>\n      <div\n        style={{\n          margin: 40,\n          width: 360,\n          height: 700,\n          border: '1px solid black',\n          display: 'flex',\n          flexFlow: 'column',\n          alignItems: 'center',\n        }}\n      >\n        <IndexBar indexList={['1', '2', '3']}>\n          <IndexBar.Anchor id=\"1\" />\n          <div style={{ height: 400, backgroundColor: 'yellow' }} />\n          <IndexBar.Anchor id=\"2\" />\n          <div style={{ height: 400, backgroundColor: 'blue' }} />\n          <IndexBar.Anchor id=\"3\" />\n          <div style={{ height: 400, backgroundColor: 'grey' }} />\n        </IndexBar>\n      </div>\n    </>\n  );\n};\n\nexport default Demo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
