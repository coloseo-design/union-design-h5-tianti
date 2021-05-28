import React, { useState } from 'react';
import { Uploader } from '../index';
import { UploaderFile } from './uploader';

const Demo = () => {
  const [file, setFile] = useState<UploaderFile>();

  return (
    <>
      <div
        style={{
          margin: 40,
          width: 414,
          height: 250,
          border: '1px solid black',
          position: 'relative',
        }}
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
        style={{
          margin: 40,
          width: 360,
          height: 500,
          border: '1px solid black',
          position: 'relative',
        }}
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
