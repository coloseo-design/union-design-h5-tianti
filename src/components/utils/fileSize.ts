/* eslint-disable import/prefer-default-export */
export const fileSize = (size: number): string => {
  if (size < 1024) {
    return `${size}B`;
  }

  if (size < 1048576 && size >= 1024) {
    return `${Math.round((size / 1024) * 100) / 100}KB`;
  }

  if (size < 1073741824 && size >= 1048576) {
    return `${Math.round((size / 1024 / 1024) * 100) / 100}MB`;
  }

  return '0B';
};
