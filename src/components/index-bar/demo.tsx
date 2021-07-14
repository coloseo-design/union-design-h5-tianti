import React, { ReactNode, useCallback, useMemo } from 'react';
import { IndexBar } from '../index';
import './styles/index';

export const Demo = () => {
  const getRandom = useCallback(
    (min: number, max: number) => Math.random() * (max - min) + min,
    [],
  );

  const content = useMemo(() => {
    const list = [] as ReactNode[];
    for (let i = 65; i < 91; i += 1) {
      list.push(<IndexBar.Anchor key={`${i}-anchor`} id={String.fromCharCode(i)} />);
      list.push(
        <div
          key={`${i}-content`}
          style={{
            height: 400,
            backgroundColor: `rgba(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)}, 0.2)`,
          }}
        />,
      );
    }
    return list;
  }, [getRandom]);

  return (
    <>
      <div
        style={{
          margin: 40,
          width: 360,
          height: 700,
          border: '1px solid black',
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
        }}
      >
        <IndexBar>
          {content}
        </IndexBar>
      </div>
      <div
        style={{
          margin: 40,
          width: 360,
          height: 700,
          border: '1px solid black',
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
        }}
      >
        <IndexBar indexList={['1', '2', '3']}>
          <IndexBar.Anchor id="1" />
          <div style={{ height: 400, backgroundColor: 'yellow' }} />
          <IndexBar.Anchor id="2" />
          <div style={{ height: 400, backgroundColor: 'blue' }} />
          <IndexBar.Anchor id="3" />
          <div style={{ height: 400, backgroundColor: 'grey' }} />
        </IndexBar>
      </div>
    </>
  );
};

export default Demo;
