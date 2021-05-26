/* eslint-disable react/react-in-jsx-scope */
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
            {"/* eslint-disable no-shadow */\n/* eslint-disable no-console */\nimport React, { useState } from 'react';\nimport Uploader from './index';\nimport { UploaderFile } from './uploader';\n\nconst Demo = () => {\n  const [file, setFile] = useState<UploaderFile>();\n\n  return (\n    <>\n      <div\n        style={{\n          margin: 40,\n          width: 414,\n          height: 250,\n          border: '1px solid black',\n          position: 'relative',\n        }}\n      >\n        <Uploader.List\n          style={{ margin: '20px 15px' }}\n          action=\"http://10.13.5.99:3000/upload\"\n          onChange={(fileList) => {\n            console.log('onChange:', fileList);\n            if (!file) {\n              setFile(fileList[0]);\n            }\n          }}\n          beforeUpload={(file) => { console.log('beforeUpload:', file); return true; }}\n          afterUpload={(file) => console.log('afterUpload:', file)}\n        />\n      </div>\n      <div\n        style={{\n          margin: 40,\n          width: 360,\n          height: 500,\n          border: '1px solid black',\n          position: 'relative',\n        }}\n      >\n        {file && (\n          <Uploader.Preview\n            showBtn\n            showProgress\n            showProgressDesc\n            file={file}\n            progress={1}\n          />\n        )}\n      </div>\n    </>\n  );\n};\n\nexport default Demo;\n"}
          </Highlight>
        </div>
      )}
    </div>
  );
};

export default codeDemo;
