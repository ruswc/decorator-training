export const classDecorator = (constructor: Function) => {
  console.log(`%c ::::: CLASS DECORATOR :::::`, `color: pink; font-weight: 500`);
  // console.log(Object.values(constructor));
  console.dir(constructor);
};
