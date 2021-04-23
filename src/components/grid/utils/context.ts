import React from 'react';

type GridContextType = {
  gutter: number[];
};

const GridContext = React.createContext<GridContextType>({
  gutter: [0, 0],
});

export default GridContext;
