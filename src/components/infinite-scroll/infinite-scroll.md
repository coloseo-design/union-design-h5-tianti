---
category: Components
type: 反馈
title: InfiniteScroll
subtitle: 无限滚动
---

## API

### Props

| 参数      | 说明           | 类型                                                                                       | 默认值 |
| :-------- | :------------- | :----------------------------------------------------------------------------------------- | :----- |
| style     | 样式对象       | CSSProperties                                                                              |        |
| className | 样式类         | string                                                                                     |        |
| loadMore  | 加载更多的回调 | (isRetry: boolean) => Promise<void>                                                        |        |
| hasMore   | 是否还有更多   | boolean                                                                                    |        |
| children  | 自定义内容     | React.ReactNode \| (hasMore: boolean,failed: boolean,retry: () => void) => React.ReactNode |        |
