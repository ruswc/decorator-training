export const accessorDecorator = (target: Object, propertyKey: string | null, descriptor: PropertyDescriptor) => {
  console.log(`%c ::::: ACCESSOR DECORATOR :::::`, `color: orange; font-weight: 500`);
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
  console.log(target[propertyKey]);
};
