/* eslint-disable no-nested-ternary */
/* eslint-disable object-curly-newline */
/* eslint-disable react/display-name */
/* eslint-disable quotes */
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useClassNames, useGetPrefixClass } from "../common/base-component";
import { Loading, Button } from "../index";

export type InfiniteScrollProps = {
  className?: string;
  style?: React.CSSProperties;
  hasMore?: boolean;
  loadMore?: (isRetry: boolean) => Promise<void>;
  children?:
    | React.ReactNode
    | ((
        hasMore: boolean,
        failed: boolean,
        retry: () => void
      ) => React.ReactNode);
};

const InfiniteScroll = React.memo<InfiniteScrollProps>((props) => {
  const { className, style, children, hasMore = true, loadMore } = props ?? {};
  const getPrefixClass = useGetPrefixClass("infinite-scroll");
  const classnames = useClassNames();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { current: store } = useRef({ loading: false });

  useLayoutEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        setVisible(entries[0].isIntersecting);
      },
      {
        root: ref.current?.parentElement,
      },
    );

    ref.current && obs.observe(ref.current);

    return () => {
      obs.disconnect();
    };
  }, []);

  const send = useCallback(() => {
    if (loadMore && visible && hasMore && !store.loading) {
      store.loading = true;
      setError(false);
      loadMore(error)
        .then(() => {
          setError(false);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          store.loading = false;
        });
    }
  }, [visible, hasMore, store, error]);

  useEffect(() => {
    send();
  }, [visible, hasMore, store]);

  return (
    <div
      ref={ref}
      className={classnames(getPrefixClass(), className)}
      style={style}
    >
      {error ? (
        <>
          加载失败
          <Button type="link" style={{ fontSize: 12 }} onClick={send}>
            重新加载
          </Button>
        </>
      ) : children ? (
        typeof children === "function" ? (
          children(hasMore, error, send)
        ) : (
          children
        )
      ) : hasMore ? (
        <Loading
          style={{ backgroundColor: "none" }}
          color="#A6A8A9"
          size={12}
          textSize={12}
          textColor="#A6A8A9"
        >
          加载中....
        </Loading>
      ) : (
        "没有更多了"
      )}
    </div>
  );
});

export default InfiniteScroll;
