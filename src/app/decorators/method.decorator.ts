export const methodDecorator = (target: Object, propertyKey: string | null, descriptor: PropertyDescriptor) => {
  console.log(`%c ::::: METHOD DECORATOR :::::`, `color: orange; font-weight: 500`);
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
};
