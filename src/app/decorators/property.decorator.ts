export const propertyDecorator = (target: Object, propertyKey: string | symbol | number) => {
  console.log(`%c ::::: PROPERTY DECORATOR :::::`, `color: orange; font-weight: 500`);
  console.log(target);
  console.log(propertyKey);
};
