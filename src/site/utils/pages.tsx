/* eslint-disable */
import React from 'react';
import * as DemoComponents from '../demos';

export interface PageProps {
  name: string;
}

function rename(name: string, sparator = '-') {
  const arr = name.split(sparator).map((item) => {
    let [first, ...reset] = item;
    const codepoint = first.codePointAt(0);
    if (codepoint && codepoint > 96 && codepoint < 123) {
      const upper = codepoint - 32;
      first = String.fromCodePoint(upper);
    }
    reset.unshift(first);
    return reset.join('');
  }).join('');
  return arr;
}

export const PagesComponent: React.FC<PageProps> = (props) => {
  const { name } = props;
  const componentName: string = rename(name);
  const CurrentComponent = (DemoComponents as any)[componentName];
  return (
    <div>
      <div
        style={{
          height: 52,
          textAlign: 'center',
          position: 'fixed',
          fontSize: 32,
          lineHeight: '52px',
          background: '#fafafa',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 10,
          }}>{componentName}</div>
      <div style={{ padding: '62px 12px 62px 12px' }}>
        {React.createElement(CurrentComponent)}
      </div>
    </div>
  );
};

export default PagesComponent;
