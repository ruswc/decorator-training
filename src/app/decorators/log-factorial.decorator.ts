export const logFactorialDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  console.log(`%c ::::: LOG FACTORIAL :::::`, `color: pink; font-weight: 500`);
  let f = descriptor.value;
  descriptor.value = function (...argument) {
    let returnValue = f.apply(this, argument);
    console.log(returnValue);
    return returnValue;
  };
};
