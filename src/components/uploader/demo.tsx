import React, { useState } from 'react';
import { Uploader } from '../index';
import { UploaderFile } from './uploader';

const Demo = () => {
  const [file, setFile] = useState<UploaderFile>();
  const containerStyle = {
    width: 377,
    height: 548,
    backgroundColor: '#fafafa',
    padding: 10,
    overflow: 'scroll',
    borderRadius: 12,
    boxShadow: '#ebedf0 0 4px 12px',
    marginBottom: 10,
  };
  return (
    <>
      <div
        style={containerStyle}
      >
        <Uploader.List
          style={{ margin: '20px 15px' }}
          action="http://10.13.5.99:3000/upload"
          onChange={(fileList) => {
            console.log('onChange:', fileList);
            if (!file) {
              setFile(fileList[0]);
            }
          }}
          beforeUpload={(file1) => { console.log('beforeUpload:', file1); return true; }}
          afterUpload={(file1) => console.log('afterUpload:', file1)}
        />
      </div>
      <div
        style={containerStyle}
      >
        {file && (
          <Uploader.Preview
            showBtn
            showProgress
            showProgressDesc
            file={file}
            progress={1}
          />
        )}
      </div>
    </>
  );
};

export default Demo;
