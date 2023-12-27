import React, { useState } from 'react';
import { Uploader, Toast } from '../index';
import { UploaderFile } from './uploader';
import './styles/index';

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
      <div>
        <Uploader.List
          style={{ margin: '20px 15px' }}
          action="https://api.znggjc.com/api/uploaders"
          onChange={(fileList) => {
            console.log('onChange:', fileList);
            if (!file) {
              setFile(fileList[0]);
            }
          }}
          headers={{
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2cDZNTUw3S3hDNWc5NlBYQ1hVV3pCVnBTQzlhY1FyeSIsImV4cCI6MTY1NjY2MzQwMywibmJmIjoxNjU2NjYyODAzLCJpYXQiOjE2NTY2NjI4MDN9.tGkAJL1gTikYX_r7QLSMnma5AzOe4hk3tfQe09UUhPc'
          }}
          customSuccessTips
          beforeUpload={(file1) => { console.log('beforeUpload:', file1); return true; }}
          afterUpload={(file1) => {
           console.log('==file1', file1);
           
          }}
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
