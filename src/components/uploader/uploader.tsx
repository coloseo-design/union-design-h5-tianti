/* eslint-disable global-require */
/* eslint-disable no-shadow */
import React, {
  CSSProperties,
  memo, ReactNode, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import Toast from '../toast';
import Icon from '../icon';
import { fileSize } from '../utils/fileSize';
import { uuid } from '../utils/uuid';
import { useClassNames, useGetPrefixClass } from '../common/base-component';

export type UploaderFile = {
  /** 唯一标识 */
  uid: string;
  /** 原始文件 */
  originalFile: File;
  /** 上传进度 0-1 */
  progress: number;
  /** 文件名 */
  name: string;
  /** 原始大小 */
  size: number;
  /** 处理后带单位的大小 */
  unitSize: string;
  /** 类型 */
  type: string;
  /** 状态 */
  status: 'init' | 'uploading' | 'success' | 'failed';
  /** 上传地址 */
  url: string;
  /** 上传head */
  headers: Record<string, string>;
  /** 上传携带的 form 数据 */
  formData: Record<string, unknown>;
  /** 发到后台的文件参数名 */
  formDataFileName: string;
  /** 上传请求的 http method */
  method: 'POST' | 'PUT' | 'PATCH';
  /** 上传请求时是否携带 cookie */
  withCredentials: boolean;
};

type ReturnPT<T> = T | Promise<T>;

export type UploaderProps = {
  /** 上传的地址 */
  action?: string | ((file: UploaderFile) => ReturnPT<string>);
  /** 上传所需额外参数或返回上传额外参数的方法 */
  data?: Record<string, unknown> | ((file: UploaderFile) => ReturnPT<Record<string, unknown>>);
  /** 接受上传的文件类型 */
  accept?: string;
  /** 上传请求的 http method */
  method?: 'POST' | 'PUT' | 'PATCH';
  /** 上传请求时是否携带 cookie */
  withCredentials?: boolean;
  /** 双向绑定的fileList */
  fileList?: UploaderFile[];
  /** 设置上传的请求头部 */
  headers?: Record<string, string> | ((file: UploaderFile) => ReturnPT<Record<string, string>>);
  /** 发到后台的文件参数名 */
  name?: string;
  /** 上传文件之前的钩子，参数为上传的文件，
     * 若返回 false 则停止上传。支持返回一个 Promise 对象，
     * Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象） */
  beforeUpload?: (file: UploaderFile) => boolean | Promise<UploaderFile>;
  /** 上传文件之后的钩子，参数为上传的文件 */
  afterUpload?: (file: UploaderFile) => boolean | Promise<UploaderFile>;
  /** 上传文件改变时回调 */
  onChange?: (fileList: UploaderFile[]) => void;

  children: ReactNode;
};

export type UploaderListProps = Omit<UploaderProps, 'children'> & {
  /** 样式 */
  style?: CSSProperties;
  /** 样式 */
  className?: string;
  /** 点击预览的回调 */
  onPreview?: (file: UploaderFile) => void;
};

export type UploaderType = React.NamedExoticComponent<UploaderProps>
  & {
    List: React.NamedExoticComponent<UploaderListProps> & {
      Config?: {
        wps?: JSX.Element;
      }
    }
  };

const Uploader = memo<UploaderProps>((props) => {
  const {
    children,
    accept,
    action,
    withCredentials = false,
    method = 'POST',
    name = 'file',
    headers,
    data,
    beforeUpload,
    afterUpload,
    onChange,
  } = props ?? {};

  const inputRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState({
    inputKey: 0,
    fileList: [] as UploaderFile[],
  });

  const startUploadFile = useCallback((file: UploaderFile) => {
    // const xhr = new XMLHttpRequest();
    console.log(file);
  }, []);

  const beforeUploadFile = useCallback(async (file: UploaderFile) => {
    const result = await beforeUpload?.(file) ?? true;

    if (result === false) return;

    if (typeof result === 'object') {
      Object.assign(file, result);
    }

    startUploadFile(file);
  }, [beforeUpload, startUploadFile]);

  const handleUploadFile = useCallback(async (file: File) => {
    try {
      const newFileList = [...state.fileList];

      const newFile: UploaderFile = {
        uid: uuid(),
        originalFile: file,
        progress: 0,
        name: file.name,
        size: file.size,
        unitSize: fileSize(file.size),
        type: file.type,
        status: 'init',
        url: '',
        headers: {},
        formData: {},
        formDataFileName: name,
        method,
        withCredentials,
      };

      newFile.url = (typeof action === 'function' ? (await action?.(newFile)) : action) ?? '';
      newFile.headers = (typeof headers === 'function' ? (await headers?.(newFile)) : headers) ?? {};
      newFile.formData = (typeof data === 'function' ? (await data?.(newFile)) : data) ?? {};

      newFileList.push(newFile);

      setState((obj) => ({ ...obj, fileList: newFileList }));

      beforeUploadFile(newFile);
    } catch (error) {
      console.log(error);
      Toast.info({ content: error, mask: false });
    }
  }, [action, beforeUploadFile, data, headers, method, name, state.fileList, withCredentials]);

  const onInputChange: React.InputHTMLAttributes<HTMLInputElement>['onChange'] = useCallback(
    (event) => {
      const { files } = event.target;
      if (files) {
        const fileArr = Array.prototype.slice.call(files);
        if (fileArr.length > 0) handleUploadFile(fileArr[0]);
        setState((obj) => ({ ...obj, inputKey: obj.inputKey + 1 }));
      }
    },
    [handleUploadFile],
  );

  const wrapOnClick = useCallback(() => inputRef.current?.click(), []);

  useEffect(() => onChange?.(state.fileList), [onChange, state.fileList]);

  return (
    <div onClick={wrapOnClick}>
      {children}
      <input
        key={state.inputKey}
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={onInputChange}
        style={{ display: 'none' }}
      />
    </div>
  );
}) as UploaderType;

Uploader.List = memo((props) => {
  const {
    style,
    className,
    onPreview,
    ...uploaderProps
  } = props ?? {};

  const getPrefixClass = useGetPrefixClass('uploader');

  const classNames = useClassNames();

  const [fileList, setFileList] = useState([] as UploaderFile[]);

  const onChange: NonNullable<UploaderProps['onChange']> = useCallback((fileList) => setFileList(fileList), []);

  const wrapDivClassName = useMemo(
    () => classNames(getPrefixClass(), className),
    [className, classNames, getPrefixClass],
  );

  return (
    <div style={style} className={wrapDivClassName}>
      <div className="list">
        {fileList.map((file) => (
          <div key={file.uid} className="item">
            <div className="icon">
              {Uploader.List.Config?.wps}
            </div>
            <div className="content">
              <div className="name">{file.name}</div>
              <div className="progress">{file.unitSize}</div>
            </div>
            <div className="preview">
              preview
            </div>
            <div className="delete">
              <Icon type="delete" />
            </div>
          </div>
        ))}
      </div>
      <div className="icon">
        <Uploader
          {...uploaderProps}
          fileList={fileList}
          onChange={onChange}
        >
          <div className="icon">
            <Icon type="add" />
          </div>
        </Uploader>
      </div>
    </div>
  );
});

Uploader.List.Config = {
  wps: (
    <svg width="42px" height="48px" viewBox="0 0 176 200">
      <path d="M15.9375,0 C7.1875,0 0,7.1875 0,15.9375 L0,184.0625 C0,192.8125 7.1875,200 15.9375,200 L159.0625,200 C167.8125,200 175,192.8125 175,184.0625 L175,63.4375 L115.9375,0 L15.9375,0 Z" fill="#4C98FC" />
      <path d="M175,63.75 L175,66.875 L135,66.875 C135,66.875 115.3125,62.8125 115.625,45.625 C115.625,45.625 116.5625,63.75 134.6875,63.75 L175,63.75 Z" fill="#4C98FC" />
      <path d="M115.9375,0 L115.9375,45.625 C115.9375,50.625 119.375,63.75 135,63.75 L175,63.75 L115.9375,0 Z" id="路径" fill="#D9ECFF" opacity="0.49850109" />
      <text fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="52" fontWeight="500" fill="#FFFFFF">
        <tspan x="28.5" y="133">WPS</tspan>
      </text>
    </svg>
  ),
};

export default Uploader;
