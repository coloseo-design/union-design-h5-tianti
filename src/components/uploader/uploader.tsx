/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
/* eslint-disable global-require */
/* eslint-disable no-shadow */
import React, {
  CSSProperties,
  memo, ReactNode, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import Toast from '../toast';
import Icon from '../icon';
import Button from '../button';
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
        wps?: ReactNode;
        word?: ReactNode;
        tif?: ReactNode;
        ppt?: ReactNode;
        pdf?: ReactNode;
        jpg?: ReactNode;
        exc?: ReactNode;
        bmp?: ReactNode;
        wav?: ReactNode;
        mov?: ReactNode;
        mp4?: ReactNode;
        avi?: ReactNode;
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
    const update = () => setState((obj) => ({ ...obj, fileList: [...obj.fileList] }));

    const formData = new FormData();

    Object.keys(file.formData).forEach((key) => {
      const value = file.formData[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(`${key}[]`, item);
        });
        return;
      }

      formData.append(key, file.formData[key] as string);
    });

    if (file.originalFile instanceof Blob) {
      formData.append(file.formDataFileName, file.originalFile, file.name);
    } else {
      formData.append(file.formDataFileName, file.originalFile);
    }

    const xhr = new XMLHttpRequest();

    if (xhr.upload) {
      xhr.upload.onprogress = (event) => {
        if (event.total > 0) {
          Object.assign(file, { progress: event.loaded / event.total });
          update();
        }
      };
    }

    xhr.onerror = (event) => {
      Object.assign(file, { status: 'error' });
      update();
    };

    xhr.onload = async () => {
      const { status, responseText, response } = xhr;
      const res = responseText ?? response;
      console.log('======:', res);
      // if (res) {
      //   try {
      //     file.response = JSON.parse(res);
      //   } catch (error) {
      //     file.response = res;
      //   }
      // }

      if (status < 200 || status >= 300) {
        Object.assign(file, { status: 'error' });
        // file.response = `error:${method},${file.action},${xhr.status}`;
      } else {
        Object.assign(file, { status: 'success' });
        afterUpload?.(file);
        Toast.info({ content: '上传成功', mask: false });
      }

      update();
    };

    xhr.open(file.method, file.url, true);

    xhr.withCredentials = file.withCredentials;

    if (file.headers['X-Requested-With'] !== null) {
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    }

    Object.keys(file.headers).forEach((key) => xhr.setRequestHeader(key, file.headers[key]));

    xhr.send(formData);

    Object.assign(file, { status: 'uploading' });

    update();
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
              <div className="progress">{`${fileSize(file.size * file.progress)}/${file.unitSize}`}</div>
            </div>
            <div className="preview">
              <Button size="small">预览</Button>
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
    <svg width="100%" height="100%" viewBox="0 0 176 200">
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="自定义预设-3" transform="translate(-350.000000, -829.000000)">
          <g id="WPS" transform="translate(350.500000, 829.000000)">
            <g id="ppt备份-4" fillRule="nonzero">
              <path d="M15.9375,0 C7.1875,0 0,7.1875 0,15.9375 L0,184.0625 C0,192.8125 7.1875,200 15.9375,200 L159.0625,200 C167.8125,200 175,192.8125 175,184.0625 L175,63.4375 L115.9375,0 L15.9375,0 Z" id="路径" fill="#4C98FC" />
              <path d="M175,63.75 L175,66.875 L135,66.875 C135,66.875 115.3125,62.8125 115.625,45.625 C115.625,45.625 116.5625,63.75 134.6875,63.75 L175,63.75 Z" id="路径" fill="#4C98FC" />
              <path d="M115.9375,0 L115.9375,45.625 C115.9375,50.625 119.375,63.75 135,63.75 L175,63.75 L115.9375,0 Z" id="路径" fill="#D9ECFF" opacity="0.49850109" />
            </g>
            <text fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="52" fontWeight="500" fill="#FFFFFF">
              <tspan x="28.5" y="133">WPS</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  ),
  word: (
    <svg width="100%" height="100%" viewBox="0 0 176 200">
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="自定义预设-3" transform="translate(-350.000000, -306.000000)" fillRule="nonzero">
          <g id="WORD" transform="translate(350.500000, 306.000000)">
            <g id="ppt备份">
              <path d="M15.9375,0 C7.1875,0 0,7.1875 0,15.9375 L0,184.0625 C0,192.8125 7.1875,200 15.9375,200 L159.0625,200 C167.8125,200 175,192.8125 175,184.0625 L175,63.4375 L115.9375,0 L15.9375,0 Z" id="路径" fill="#4C98FC" />
              <path d="M175,63.75 L175,66.875 L135,66.875 C135,66.875 115.3125,62.8125 115.625,45.625 C115.625,45.625 116.5625,63.75 134.6875,63.75 L175,63.75 Z" id="路径" fill="#4C98FC" />
              <path d="M115.9375,0 L115.9375,45.625 C115.9375,50.625 119.375,63.75 135,63.75 L175,63.75 L115.9375,0 Z" id="路径" fill="#D9ECFF" opacity="0.49850109" />
            </g>
            <g id="编组" transform="translate(42.012247, 75.416667)" fill="#FFFFFF">
              <path d="M0.326294629,69.7916668 L0.326294629,5.2083334 C0.326294629,1.73611113 2.06240576,0 5.53462803,0 L5.53462803,0 C9.00685029,0 10.7429614,1.73611113 10.7429614,5.2083334 L10.7429614,69.7916668 C10.7429614,73.2638891 9.00685029,75 5.53462803,75 L5.53462803,75 C2.06240576,75 0.326294629,73.2638889 0.326294629,69.7916668 Z" id="路径" />
              <path d="M1.84142393,66.0927453 L41.6161804,26.3179889 C44.0714123,23.862757 46.5266442,23.862757 48.9818761,26.3179889 L48.9818761,26.3179889 C51.437108,28.7732208 51.437108,31.2284527 48.9818761,33.6836846 L9.20711963,73.458441 C6.75188773,75.9136729 4.29665583,75.9136729 1.84142393,73.458441 L1.84142393,73.458441 C-0.613807975,71.0032091 -0.613807975,68.5479772 1.84142393,66.0927453 Z" id="路径" />
              <path d="M48.9653663,26.3299834 L88.7401228,66.1047398 C91.1953547,68.5599717 91.1953547,71.0152036 88.7401228,73.4704355 L88.7401228,73.4704355 C86.2848909,75.9256674 83.829659,75.9256674 81.3744271,73.4704355 L41.5996706,33.6956791 C39.1444387,31.2404472 39.1444387,28.7852153 41.5996706,26.3299834 L41.5996706,26.3299834 C44.0549025,23.8747515 46.5101344,23.8747515 48.9653663,26.3299834 Z" id="路径" />
              <path d="M79.8262946,69.7916668 L79.8262946,5.2083334 C79.8262946,1.73611113 81.5624058,0 85.034628,0 L85.034628,0 C88.5068503,0 90.2429614,1.73611113 90.2429614,5.2083334 L90.2429614,69.7916668 C90.2429614,73.2638891 88.5068503,75 85.034628,75 L85.034628,75 C81.5624058,75 79.8262946,73.2638889 79.8262946,69.7916668 Z" id="路径" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  tif: (
    <svg width="100%" height="100%" viewBox="0 0 176 200">
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="自定义预设-3" transform="translate(-785.000000, -306.000000)">
          <g id="编组-7" transform="translate(785.500000, 306.000000)">
            <g id="ppt备份-5" fillRule="nonzero">
              <path d="M15.9375,0 C7.1875,0 0,7.1875 0,15.9375 L0,184.0625 C0,192.8125 7.1875,200 15.9375,200 L159.0625,200 C167.8125,200 175,192.8125 175,184.0625 L175,63.4375 L115.9375,0 L15.9375,0 Z" id="路径" fill="#F0AD33" />
              <path d="M175,63.75 L175,66.875 L135,66.875 C135,66.875 115.3125,62.8125 115.625,45.625 C115.625,45.625 116.5625,63.75 134.6875,63.75 L175,63.75 Z" id="路径" fill="#F2C40E" opacity="0.370049055" />
              <path d="M115.9375,0 L115.9375,45.625 C115.9375,50.625 119.375,63.75 135,63.75 L175,63.75 L115.9375,0 Z" id="路径" fill="#FFF3C1" opacity="0.5" />
            </g>
            <text id="TIF" fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="52" fontWeight="500" fill="#FFFFFF">
              <tspan x="49.5" y="141">TIF</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  ),
  ppt: (
    <svg width="100%" height="100%" viewBox="0 0 176 200">
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="自定义预设-3" transform="translate(-350.000000, -567.000000)">
          <g id="PPT" transform="translate(350.500000, 567.000000)">
            <path d="M15.9375,0 C7.1875,0 0,7.1875 0,15.9375 L0,184.0625 C0,192.8125 7.1875,200 15.9375,200 L159.0625,200 C167.8125,200 175,192.8125 175,184.0625 L175,63.4375 L115.9375,0 L15.9375,0 Z" id="路径" fill="#E86411" fillRule="nonzero" />
            <path d="M175,63.75 L175,66.875 L135,66.875 C135,66.875 115.3125,62.8125 115.625,45.625 C115.625,45.625 116.5625,63.75 134.6875,63.75 L175,63.75 Z" id="路径" fill="#DC3119" fillRule="nonzero" opacity="0.28065952" />
            <path d="M115.9375,3.55271368e-15 L115.9375,45.625 C115.9375,50.625 119.375,63.75 135,63.75 L175,63.75 L115.9375,3.55271368e-15 Z" id="路径" fill="#FFFFFF" fillRule="nonzero" opacity="0.5" />
            <text fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="52" fontWeight="500" fill="#FFFFFF">
              <tspan x="37.5" y="141">PPT</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  ),
  pdf: (
    <svg width="100%" height="100%" viewBox="0 0 176 200">
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="自定义预设-3" transform="translate(-350.000000, -1376.000000)">
          <g id="PDF" transform="translate(350.500000, 1376.000000)">
            <g id="ppt" fillRule="nonzero">
              <path d="M15.9375,0 C7.1875,0 0,7.1875 0,15.9375 L0,184.0625 C0,192.8125 7.1875,200 15.9375,200 L159.0625,200 C167.8125,200 175,192.8125 175,184.0625 L175,63.4375 L115.9375,0 L15.9375,0 Z" id="路径" fill="#C40000" />
              <path d="M175,63.75 L175,66.875 L135,66.875 C135,66.875 115.3125,62.8125 115.625,45.625 C115.625,45.625 116.5625,63.75 134.6875,63.75 L175,63.75 Z" id="路径" fill="#D22E2E" opacity="0.390647711" />
              <path d="M115.9375,0 L115.9375,45.625 C115.9375,50.625 119.375,63.75 135,63.75 L175,63.75 L115.9375,0 Z" id="路径" fill="#F4A3A3" opacity="0.595044513" />
            </g>
            <text fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="52" fontWeight="500" fill="#FFFFFF">
              <tspan x="36.5" y="141">PDF</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  ),
  jpg: (
    <svg width="100%" height="100%" viewBox="0 0 176 200">
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="自定义预设-3" transform="translate(-785.000000, -588.000000)">
          <g id="JPG" transform="translate(785.500000, 588.000000)">
            <g id="ppt备份-5" fillRule="nonzero">
              <path d="M15.9375,0 C7.1875,0 0,7.1875 0,15.9375 L0,184.0625 C0,192.8125 7.1875,200 15.9375,200 L159.0625,200 C167.8125,200 175,192.8125 175,184.0625 L175,63.4375 L115.9375,0 L15.9375,0 Z" id="路径" fill="#F0AD33" />
              <path d="M175,63.75 L175,66.875 L135,66.875 C135,66.875 115.3125,62.8125 115.625,45.625 C115.625,45.625 116.5625,63.75 134.6875,63.75 L175,63.75 Z" id="路径" fill="#F2C40E" opacity="0.370049055" />
              <path d="M115.9375,0 L115.9375,45.625 C115.9375,50.625 119.375,63.75 135,63.75 L175,63.75 L115.9375,0 Z" id="路径" fill="#FFF3C1" opacity="0.5" />
            </g>
            <text fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="52" fontWeight="500" fill="#FFFFFF">
              <tspan x="36.5" y="141">JPG</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  ),
  exc: (
    <svg width="100%" height="100%" viewBox="0 0 176 200">
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="自定义预设-3" transform="translate(-350.000000, -1095.000000)">
          <g id="EXC" transform="translate(350.500000, 1095.000000)">
            <path d="M15.9375,0 C7.1875,0 0,7.1875 0,15.9375 L0,184.0625 C0,192.8125 7.1875,200 15.9375,200 L159.0625,200 C167.8125,200 175,192.8125 175,184.0625 L175,63.4375 L115.9375,0 L15.9375,0 Z" id="路径备份" fill="#00BD76" fillRule="nonzero" />
            <path d="M175,63.75 L175,66.875 L135,66.875 C135,66.875 115.3125,62.8125 115.625,45.625 C115.625,45.625 116.5625,63.75 134.6875,63.75 L175,63.75 Z" id="路径备份-2" fill="#00BD76" fillRule="nonzero" />
            <path d="M115.9375,3.55271368e-15 L115.9375,45.625 C115.9375,50.625 119.375,63.75 135,63.75 L175,63.75 L115.9375,3.55271368e-15 Z" id="路径备份-3" fill="#BCFFE6" fillRule="nonzero" opacity="0.401889535" />
            <text fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="52" fontWeight="500" fill="#FFFFFF">
              <tspan x="34.5" y="142">EXC</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  ),
  bmp: (
    <svg width="100%" height="100%" viewBox="0 0 176 200">
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="自定义预设-3" transform="translate(-785.000000, -870.000000)">
          <g id="BMP" transform="translate(785.500000, 870.000000)">
            <g id="ppt备份-5" fillRule="nonzero">
              <path d="M15.9375,0 C7.1875,0 0,7.1875 0,15.9375 L0,184.0625 C0,192.8125 7.1875,200 15.9375,200 L159.0625,200 C167.8125,200 175,192.8125 175,184.0625 L175,63.4375 L115.9375,0 L15.9375,0 Z" id="路径" fill="#F0AD33" />
              <path d="M175,63.75 L175,66.875 L135,66.875 C135,66.875 115.3125,62.8125 115.625,45.625 C115.625,45.625 116.5625,63.75 134.6875,63.75 L175,63.75 Z" id="路径" fill="#F2C40E" opacity="0.370049055" />
              <path d="M115.9375,0 L115.9375,45.625 C115.9375,50.625 119.375,63.75 135,63.75 L175,63.75 L115.9375,0 Z" id="路径" fill="#FFF3C1" opacity="0.5" />
            </g>
            <text fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="52" fontWeight="500" fill="#FFFFFF">
              <tspan x="28.5" y="141">BMP</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  ),
  wav: (
    <svg width="100%" height="100%" viewBox="0 0 176 200">
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="自定义预设-3" transform="translate(-1265.000000, -1084.000000)">
          <g id="编组-13" transform="translate(1265.000000, 1084.000000)">
            <g id="mp4备份-2" fillRule="nonzero">
              <path d="M15.9375,0 C7.1875,0 0,7.1875 0,15.9375 L0,184.0625 C0,192.8125 7.1875,200 15.9375,200 L159.0625,200 C167.8125,200 175,192.8125 175,184.0625 L175,63.4375 L115.9375,0 L15.9375,0 Z" id="路径" fill="#9B64B2" />
              <path d="M175,63.75 L175,66.875 L135,66.875 C135,66.875 115.3125,62.8125 115.625,45.625 C115.625,45.625 116.5625,63.75 134.6875,63.75 L175,63.75 Z" id="路径" fill="#824B9E" opacity="0.184093387" />
              <path d="M115.9375,0 L115.9375,45.625 C115.9375,50.625 119.375,63.75 135,63.75 L175,63.75 L115.9375,0 Z" id="路径" fill="#FFFFFF" opacity="0.5" />
            </g>
            <text id="WAV" fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="52" fontWeight="500" fill="#FFFFFF">
              <tspan x="22" y="141">WAV</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  ),
  mov: (
    <svg width="100%" height="100%" viewBox="0 0 176 200">
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="自定义预设-3" transform="translate(-1265.000000, -823.000000)">
          <g id="编组-12" transform="translate(1265.000000, 823.000000)">
            <g id="mp4备份" fillRule="nonzero">
              <path d="M15.9375,0 C7.1875,0 0,7.1875 0,15.9375 L0,184.0625 C0,192.8125 7.1875,200 15.9375,200 L159.0625,200 C167.8125,200 175,192.8125 175,184.0625 L175,63.4375 L115.9375,0 L15.9375,0 Z" id="路径" fill="#9B64B2" />
              <path d="M175,63.75 L175,66.875 L135,66.875 C135,66.875 115.3125,62.8125 115.625,45.625 C115.625,45.625 116.5625,63.75 134.6875,63.75 L175,63.75 Z" id="路径" fill="#824B9E" opacity="0.184093387" />
              <path d="M115.9375,0 L115.9375,45.625 C115.9375,50.625 119.375,63.75 135,63.75 L175,63.75 L115.9375,0 Z" id="路径" fill="#FFFFFF" opacity="0.5" />
            </g>
            <text id="MOV" fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="52" fontWeight="500" fill="#FFFFFF">
              <tspan x="22" y="141">MOV</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  ),
  mp4: (
    <svg width="100%" height="100%" viewBox="0 0 176 200">
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="自定义预设-3" transform="translate(-1265.000000, -561.000000)">
          <g id="编组-11" transform="translate(1265.000000, 561.000000)">
            <g id="mp4" fillRule="nonzero">
              <path d="M15.9375,0 C7.1875,0 0,7.1875 0,15.9375 L0,184.0625 C0,192.8125 7.1875,200 15.9375,200 L159.0625,200 C167.8125,200 175,192.8125 175,184.0625 L175,63.4375 L115.9375,0 L15.9375,0 Z" id="路径" fill="#9B64B2" />
              <path d="M175,63.75 L175,66.875 L135,66.875 C135,66.875 115.3125,62.8125 115.625,45.625 C115.625,45.625 116.5625,63.75 134.6875,63.75 L175,63.75 Z" id="路径" fill="#824B9E" opacity="0.184093387" />
              <path d="M115.9375,0 L115.9375,45.625 C115.9375,50.625 119.375,63.75 135,63.75 L175,63.75 L115.9375,0 Z" id="路径" fill="#FFFFFF" opacity="0.5" />
            </g>
            <text id="MP4" fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="52" fontWeight="500" fill="#FFFFFF">
              <tspan x="31" y="142">MP4</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  ),
  avi: (
    <svg width="100%" height="100%" viewBox="0 0 176 200">
      <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="自定义预设-3" transform="translate(-1259.000000, -306.000000)">
          <g id="编组-10" transform="translate(1259.000000, 306.000000)">
            <g id="mp4备份-3" fillRule="nonzero">
              <path d="M15.9375,0 C7.1875,0 0,7.1875 0,15.9375 L0,184.0625 C0,192.8125 7.1875,200 15.9375,200 L159.0625,200 C167.8125,200 175,192.8125 175,184.0625 L175,63.4375 L115.9375,0 L15.9375,0 Z" id="路径" fill="#9B64B2" />
              <path d="M175,63.75 L175,66.875 L135,66.875 C135,66.875 115.3125,62.8125 115.625,45.625 C115.625,45.625 116.5625,63.75 134.6875,63.75 L175,63.75 Z" id="路径" fill="#824B9E" opacity="0.184093387" />
              <path d="M115.9375,0 L115.9375,45.625 C115.9375,50.625 119.375,63.75 135,63.75 L175,63.75 L115.9375,0 Z" id="路径" fill="#FFFFFF" opacity="0.5" />
            </g>
            <text id="AVI" fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="52" fontWeight="500" fill="#FFFFFF">
              <tspan x="46" y="141">AVI</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  ),
};

export default Uploader;
