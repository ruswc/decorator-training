export const factoryDecorator = (value: boolean) => {
  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    descriptor.enumerable = value;
  };
};
