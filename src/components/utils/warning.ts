const warning = (condition: boolean, description: string) => {
  if (condition) {
    // eslint-disable-next-line no-console
    console.error(description);
  }
};

export default warning;
