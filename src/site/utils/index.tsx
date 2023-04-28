/* eslint-disable */
import React from 'react';
import * as PageComponents from '../docs';
// import * as DemoComponents from '../demos';
// import * as CodeDemoComponents from '../code-demos';
import '../assets/style/page.less';

export function element(params: any) {
  if (typeof params === 'string') {
    return React.createElement('span', null, params);
  }
  const children = typeof params.children === 'string' ? [params.children] : (params.children || []).map((child: any) => element(child));
  const props = {};
  Object.keys(params.attrs || {}).forEach((key) => {
    const value = (params.attrs || {})[key];
    Object.assign(props, {
      [key]: value,
    });
  });
  return React.createElement(
    params.tag,
    params.attrs ? props : null,
    ...children,
  );
}

export interface PageProps {
  name: string;
}

function rename(name: string, sparator = '-') {
  /* eslint prefer-const: 0 */
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

const iframePath = 'http://127.0.0.1:3000';
export const BasePageComponent: React.FC<PageProps> = (props: PageProps) => {
  const { name } = props;
  const componentName: string = rename(name);
  const data = PageComponents[componentName];
  // const CurrentComponent = DemoComponents[componentName];
  // const CodeComponent = CodeDemoComponents[componentName];
  return (
    <div className='box'>
      {element(data.content)}
      <div className="iframe">
        <iframe src={`${iframePath}/#/iframe/${componentName}`} frameBorder="0" />
      </div>
    </div>
  );
};

export default BasePageComponent;
