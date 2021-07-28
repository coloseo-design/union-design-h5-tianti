---
category: Components
type: 数据录入
title: Uploader
subtitle: 文件上传
---

用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。

## API

| 参数            | 说明                                                                                                                                                                                                      | 类型                                                                                   | 默认值 |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- | :----- |
| action          | 上传的地址                                                                                                                                                                                                | string \| ((file: UploaderFile) => ReturnPT<string>)                                   | -      |
| data            | 上传所需额外参数或返回上传额外参数的方法                                                                                                                                                                  | Record<string, unknown> \| ((file: UploaderFile) => ReturnPT<Record<string, unknown>>) | -      |
| accept          | 接受上传的文件类型                                                                                                                                                                                        | string                                                                                 | -      |
| method          | 上传请求的 http method                                                                                                                                                                                    | 'POST' \| 'PUT' \| 'PATCH'                                                             | 'POST' |
| withCredentials | 上传请求时是否携带 cookie                                                                                                                                                                                 | boolean                                                                                | false  |
| headers         | 设置上传的请求头部                                                                                                                                                                                        | Record<string, string> \| ((file: UploaderFile) => ReturnPT<Record<string, string>>)   | -      |
| name            | 发到后台的文件参数名                                                                                                                                                                                      | string                                                                                 | 'file' |
| beforeUpload    | 上传文件之前的钩子，参数为上传的文件， 若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象） | (file: UploaderFile) => boolean \| Promise<UploaderFile>                               | -      |
| afterUpload     | 上传文件之后的钩子，参数为上传的文件                                                                                                                                                                      | (file: UploaderFile) => void                                                           | -      |
| onChange        | 上传文件改变时回调                                                                                                                                                                                        | (file: UploaderFile) => void                                                           | -      |

## ReturnPT

type ReturnPT<T> = T | Promise<T>;

## UploaderFile

| 参数             | 说明                      | 类型                                           | 默认值 |
| :--------------- | :------------------------ | :--------------------------------------------- | :----- |
| uid              | 唯一标识                  | string                                         | -      |
| originalFile     | 原始文件                  | File                                           | -      |
| progress         | 上传进度 0-1              | number                                         | -      |
| name             | 文件名                    | string                                         | -      |
| size             | 原始大小                  | number                                         | -      |
| unitSize         | 处理后带单位的大小        | string                                         | -      |
| type             | 类型                      | string                                         | -      |
| status           | 状态                      | 'init' \| 'uploading' \| 'success' \| 'failed' | 'init' |
| url              | 上传地址                  | string                                         | -      |
| headers          | 上传head                  | Record<string, string>                         | -      |
| formData         | 上传携带的 form 数据      | Record<string, unknown>                        | -      |
| formDataFileName | 发到后台的文件参数名      | string                                         | -      |
| method           | 上传请求的 http method    | 'POST' \| 'PUT' \| 'PATCH'                     | 'POST' |
| withCredentials  | 上传请求时是否携带 cookie | boolean                                        | false  |
| reponse          | 上传成功后的返回          | string                                         | -      |


## UploaderListProps

UploaderListProps = Omit<UploaderProps, 'children' | 'onChange'> & UploaderListProps

| 参数      | 说明                                                                          | 类型                                         | 默认值 |
| :-------- | :---------------------------------------------------------------------------- | :------------------------------------------- | :----- |
| style     | 样式                                                                          | CSSProperties                                | -      |
| className | 样式                                                                          | string                                       | -      |
| onPreview | 点击预览的回调 有传上传完成后显示预览按钮 没有就不显示                        | (file: UploaderFile) => void                 | -      |
| iconView  | 右侧图片 返回 ReactNode 显示 ReactNode 返回false用默认的 默认的没有就显示空白 | (file: UploaderFile) => ReactNode \| boolean | -      |
| onChange  | 文件列表发生改变的回掉                                                        | (file: UploaderFile[]) => void               | -      |

## UploaderPreview

| 参数             | 说明                                                                          | 类型                                         | 默认值                               |
| :--------------- | :---------------------------------------------------------------------------- | :------------------------------------------- | :----------------------------------- |
| file             | 要预览的文件                                                                  | UploaderFile                                 | -                                    |
| progress         | 进度 0-1 百分比                                                               | number                                       | -                                    |
| progressDesc     | rogress底部描述                                                               | string                                       | 不支持的格式，请在其他应用中打开查看 |
| onBtnClick       | 底部按钮 点击回掉                                                             | () => void                                   | -                                    |
| btnText          | 底部按钮文字                                                                  | string                                       | 其他应用打开                         |
| showProgress     | 是否显示进度条                                                                | boolean                                      | false                                |
| showProgressDesc | 是否显示进度条下方文字                                                        | boolean                                      | false                                |
| showBtn          | 是否显示底部按钮                                                              | boolean                                      | false                                |
| iconView         | 右侧图片 返回 ReactNode 显示 ReactNode 返回false用默认的 默认的没有就显示空白 | (file: UploaderFile) => ReactNode \| boolean | -                                    |

## 全局配置 Uploader.Config

```javascript
type UploaderListConfigItem = {
  /** 图片 */
  icon?: ReactNode;
  /** 作用于那些后缀名的文件 */
  exts?: string[];
};

type Uploader.Config = Config: { [key: string]: UploaderListConfigItem }

/** 默认配置 */
Uploader.Config = {
  wps: { exts: ['wps'] },
  word: { exts: ['doc', 'docx'] },
  tiff: { exts: ['tiff'] },
  ppt: { exts: ['ppt', 'pptx'] },
  pdf: { exts: ['pdf'] },
  jpg: { exts: ['jpg', 'jpeg'] },
  png: { exts: ['png'] },
  excel: { exts: ['xls', 'xlsx'] },
  wav: { exts: ['wav'] },
  mov: { exts: ['mov'] },
  mp4: { exts: ['mp4'] },
  avi: { exts: ['avi'] },
  def: {
    exts: [],
    icon: <div />,
  },
};
```

## 如果要新增一个文件的图标

Uploader.Config.xxx = { exts: \['文件的后缀名不包含点'\], icon: 一个组件 }

## 如果要修改已有文件的图标

Uploader.Config.xxx.exts = \['新的文件的后缀名'\];

Uploader.Config.xxx.icon = 一个组件;

## 修改的默认文件的图标

Uploader.Config.def.icon = 一个组件;
