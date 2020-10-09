export const factorialLog = (target: Object, propertyKey: string | null, descriptor: PropertyDescriptor) => {
  const method = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const result = method.apply(this, args);
    console.log(`%c Factorial log:`, `color:green;`, result);
    return result;
  };
  return descriptor;
};

export const logFactorialFactoryDecorator = (...args) =>
  factorialLog.apply(() => {}, args);
// factorialLog.apply(this, args);




