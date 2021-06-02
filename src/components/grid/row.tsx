import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames';
import { RowProps } from './type';
import { ConfigContext } from '../config-provider/context';
import { GridMediaQueryResult, GridMediaQuery, GridContext } from './utils/index';
import { getGutter } from './utils/gutter';

const Row: React.FC<RowProps> = (props: RowProps) => {
  const {
    children,
    align,
    gutter,
    justify,
    className,
    style: customStyle,
    ...rest
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefix = getPrefixCls('row');
  const rowClassName = classNames(prefix, {
    [`${prefix}-align-${align}`]: align,
    [`${prefix}-justify-${justify}`]: justify,
  }, className);
  const [screen, setScreen] = useState<GridMediaQueryResult>({});
  const responsiveHandler = useCallback((result: GridMediaQueryResult) => {
    setScreen(result);
  }, []);

  useEffect(() => {
    GridMediaQuery.subscribe(responsiveHandler);
    return () => {
      GridMediaQuery.unsubscribe(responsiveHandler);
    };
  }, [responsiveHandler]);

  const [horizontal, vertical] = getGutter(gutter, screen);
  const horizontalGutter = horizontal / 2;
  const verticalGutter = vertical / 2;
  const style = {
    ...customStyle,
    alignItems: align,
    ...(horizontalGutter > 0 ? {
      marginLeft: -horizontalGutter,
      marginRight: -horizontalGutter,
    } : {}),
    ...(verticalGutter > 0 ? {
      marginTop: -verticalGutter,
      marginBottom: -verticalGutter,
    } : {}),
  };

  return (
    <div {...rest} className={rowClassName} style={style}>
      <GridContext.Provider value={{ gutter: [horizontal, vertical] }}>
        {children}
      </GridContext.Provider>
    </div>
  );
};

export default Row;
