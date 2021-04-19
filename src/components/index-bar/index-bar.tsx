import React, {
  memo, ReactNode, useCallback, useMemo, useRef,
  useState, createContext, useContext,
} from 'react';
import { DivEvent, useClassNames, useGetPrefixClass } from '../common/base-component';
import { animation } from '../utils/animation';

export type IndexBarProps = {
  /** 锚点列表 */
  indexList?: string[];

  children?: ReactNode;
};

export type IndexBarAnchorProps = {
  /** 锚点 */
  id: string;
};

export type IndexBarType = React.NamedExoticComponent<IndexBarProps>
  & { Anchor: React.NamedExoticComponent<IndexBarAnchorProps> };

const IndexBarContext = createContext<{
  sticky?: string;
  anchorMap?: React.MutableRefObject<{ [key: string]: number }>
}>({});

const IndexBar = memo((props) => {
  const { children, indexList = [] } = props ?? {};
  const anchorMap = useRef<{ [key: string]: number }>({});
  const contentRef = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(indexList[0] ?? 'A');
  const getPrefixClass = useGetPrefixClass('index-bar');
  const classNames = useClassNames();

  const anchorList = useMemo(() => {
    if (indexList && indexList.length > 0) return indexList;
    const list = [] as string[];
    for (let i = 65; i < 91; i += 1) {
      list.push(String.fromCharCode(i));
    }
    return list;
  }, [indexList]);

  const anchorTagItemOnClick = useCallback((id: string) => {
    const { current: container } = contentRef;
    if (!container) return;

    const anchorItem: HTMLElement = Array.prototype.slice.call(container.children)
      .find((child: HTMLElement) => {
        if (child?.getAttribute('data-id') === id) {
          return true;
        }
        return false;
      });

    if (!anchorItem) return;

    const startY = container.scrollTop;
    const endY = anchorItem.offsetTop;
    const distance = endY - startY;

    const func: Parameters<typeof animation>[0] = (percentage) => {
      container.scrollTop = startY + distance * percentage;
      if (percentage === 1) setSticky(id);
    };

    animation(func, 200);
  }, [contentRef]);

  const contentOnScroll: NonNullable<DivEvent['onScroll']> = useCallback(((event) => {
    const top = (event.target as HTMLDivElement).scrollTop;
    const arr = Object.values(anchorMap.current).sort((a, b) => a - b);
    const arrLen = arr.length;
    let index = 0;

    for (let i = 0; i < arrLen; i += 1) {
      if (top >= arr[i]) {
        index = i;
      } else {
        break;
      }
    }

    setSticky(anchorList[index]);
  }), [anchorList]);

  return (
    <div className={getPrefixClass()}>
      <div className="content" ref={contentRef} onScroll={contentOnScroll}>
        <IndexBarContext.Provider value={{
          sticky,
          anchorMap,
        }}
        >
          {children}
        </IndexBarContext.Provider>
      </div>
      <div className="anchor-tag">
        {anchorList.map((item) => (
          <div
            key={item}
            className={classNames('item', { 'anchor-item-active': sticky === item })}
            onClick={() => anchorTagItemOnClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}) as IndexBarType;

IndexBar.Anchor = memo((props) => {
  const { id } = props ?? {};
  const anchorRef = useRef<HTMLDivElement>(null);
  const { sticky, anchorMap } = useContext(IndexBarContext);
  const classNames = useClassNames();

  anchorMap && (anchorMap.current[id] = anchorRef.current?.offsetTop ?? 1);

  return (
    <>
      <div data-id={id} ref={anchorRef} />
      <div
        className={classNames('anchor-item', {
          'anchor-item-active': sticky === id,
        })}
      >
        {id}
      </div>
    </>
  );
});

export default IndexBar;
