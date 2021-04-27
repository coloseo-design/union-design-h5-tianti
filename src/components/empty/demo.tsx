/* eslint-disable max-len */
import React from 'react';
import Empty from './index';

const EmptyDemo = () => (
  <div
    style={{
      width: 900,
      backgroundColor: 'white',
    }}
  >
    <Empty />
    <Empty type="ThereWasNothing" />
    <Empty type="ThereWasNothing" description="测试测试测试" />
    <Empty type="TakeACoffeeBreak" />
    <Empty type="NoPermission" />
    <Empty type="SearchForSomethingElse" />
    <Empty type="HighlyEfficientWork" />
    <Empty type="ThePageIsMissing" />
    <Empty type="NoBrowsingRecord" />
    <Empty type="NoComment" />
    <Empty type="NoNotice" />
    <Empty type="NoNetwork" />
    <Empty type="NoDataAvailable" />
  </div>
);

export default EmptyDemo;
