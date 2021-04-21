import React, { memo, ReactNode, useMemo } from 'react';
import { useClassNames, useGetPrefixClass } from '../common/base-component';

type SkeletonProps = {
  /** 为 true 时，显示占位图。反之则直接展示子组件 */
  loading?: boolean;
  /** 是否显示头像占位图 */
  avatar?: boolean;
  /** 头像占位图大小 */
  avatarSize?: number | string;
  /** 头像占位图形状 */
  avatarShape?: 'circle' | 'square';
  /** 是否显示段落占位图 */
  paragraph?: boolean;
  /** 段落占位图行数 */
  paragraphRow?: number;
  /** 段落占位图宽度，可传数组来设置每一行的宽度 */
  paragraphRowWidth?: number[];
  /** 是否显示标题占位图 */
  title?: boolean;
  /** 标题占位图宽度 */
  titleWidth?: number | string;
  /** 为 true 时，段落和标题显示圆角 */
  round?: boolean;

  children?: ReactNode;
};

const Skeleton = memo<SkeletonProps>((props) => {
  const {
    children,
    loading,
    avatar,
    avatarShape = 'circle',
    avatarSize = 48,
    title,
    titleWidth = '40%',
    round = false,
    paragraph,
    paragraphRow = 1,
    paragraphRowWidth = [],
  } = props ?? {};
  const getPrefixClass = useGetPrefixClass('skeleton');
  const classNames = useClassNames();

  const avatarView = useMemo(() => {
    if (!avatar) return <></>;
    return (
      <div
        style={{ width: avatarSize, height: avatarSize }}
        className={classNames('avatar', `${avatarShape}`)}
      />
    );
  }, [classNames, avatar, avatarShape, avatarSize]);

  const titleView = useMemo(() => {
    if (!title) return <></>;
    return (
      <div
        style={{ width: titleWidth }}
        className={classNames('title', { round })}
      />
    );
  }, [classNames, round, title, titleWidth]);

  const paragraphView = useMemo(() => {
    if (!paragraph) return [];
    const view = new Array(paragraphRow)
      .fill(0)
      .map((_, i) => i)
      .map((item) => (
        <div
          key={item}
          className={classNames('paragraph', { round })}
          style={{ width: paragraphRowWidth[item] ?? '100%' }}
        />
      ));

    return view;
  }, [classNames, round, paragraph, paragraphRow, paragraphRowWidth]);

  if (loading) {
    return (
      <div className={getPrefixClass()}>
        {avatarView}
        <div className="content">
          {titleView}
          {paragraphView}
        </div>
      </div>
    );
  }

  return <>{children}</>;
});

export default Skeleton;
