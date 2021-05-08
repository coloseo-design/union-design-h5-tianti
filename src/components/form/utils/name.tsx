const getFormItemName = (formName: string, item: string) => `${formName}_${item}`;
export default getFormItemName;

export const defaultGetValueFromEvent = (valuePropName: string, ...evts: unknown[]) => {
  const event = evts[0] as React.TouchEvent<unknown>;
  if (event && event.target && valuePropName in event.target) {
    return (event.target as HTMLInputElement)[valuePropName];
  }
  return event;
};
