import React from 'react';
import { Empty } from '../index';

const containerStyle = {
  width: 377,
  height: 548,
  backgroundColor: '#fafafa',
  padding: 10,
  overflow: 'scroll',
  borderRadius: 12,
  boxShadow: '#ebedf0 0 4px 12px',
};
const EmptyDemo = () => (
  <div
    style={containerStyle}
  >
    {/* <Empty /> */}
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
    {/* <Empty type="NoDataAvailable" /> */}
  </div>
);

export default EmptyDemo;
