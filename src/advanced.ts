// 兼容性
// X 兼容 Y: X(目标类型) = Y(源类型)

let s: string = 'a';
s = null;

// 接口兼容性
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}
let x1: X = {
  a: 1,
  b: 2,
};
let y: Y = {
  a: 1,
  b: 2,
  c: 3,
};
x1 = y;
// y = x1;

// 函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}
// 1.参数个数 原函数参数个数不能大于目标函数个数
let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2)

// 可选参数和剩余参数
let a = (p1: number, p2: number) => {};
let b = (p1?: number, p2?: number) => {};
let c = (...args: number[]) => {};

a = b;
a = c;
// strictFunctionTypes: false;
// b = c;
// b = a;
c = a;
c = b;

// 2.参数类型
let handler3 = (a: string) => {};
// hof(handler3);

interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};

p3d = p2d;
// p2d = p3d;

// 3.返回值类型
let f1 = () => ({name: 'Alice'});
let g = () => ({name: 'Alice', location: 'Beijing'});
f1 = g;
// g = f1;

function overload(a:number, b:number): number;
function overload(a:string, b:string): string;
function overload(a:any, b:any): any {};

// 枚举兼容性
enum Fruit { Apple, Banana };
enum Color { Red, Yellow };
let fruit: Fruit.Apple = 1;
let no: number = Fruit.Apple;
// let color: Color.Red = Fruit.apple;

// 类兼容性
class A {
  constructor(p: number, q: number) {}
  id: number = 1
  private name: string = ''
}
class B {
  static s = 1;
  constructor(p: number) {}
  id :number = 2;
  private name: string = ''
}
let aa = new A(1, 2);
let bb = new B(3);
// aa = bb;
// bb = aa;
// 静态成员和构造函数不参与比较
// 含有私有成员时候，只有父类和子类可以互相兼容
class CC extends A {}
let cc = new CC(1, 2);
cc = aa;

// 泛型兼容性
interface Empty<T> {
  value: T;
}
// let obj1: Empty<number> = {};
// let obj2: Empty<string> = {};
// obj1 = obj2;
// 只有类型参数T被接口成员使用时，才会影响泛型的兼容性

let _log1 = <T>(x: T): T => {
  console.log('x');
  return x;
}
let _log2 = <U>(y: U): U => {
  console.log('y');
  return y;
}
_log1 = _log2;
// 定义相同，未制定类型参数，是兼容的

// 结构之间兼容：成员少的兼容成员多的；
// 函数之间兼容：参数多的兼容参数少的；

// 类型保护

enum Type { Strong, Weak };

class Java {
  helloJava() {
    console.log('Hello Java');
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript');
  }
  javascript: any
}

function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  // if ((lang as Java).helloJava) {
  //   (lang as Java).helloJava();
  // } else {
  //   (lang as JavaScript).helloJavaScript();
  // }

  // instanceof
  // if (lang instanceof Java) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }

  // in
  // if ('java' in lang) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }

  // typeof
  if (typeof x === 'string') {
    console.log(x.length);
  } else {
    x.toFixed(2);
  }

  // 创建类型保护函数
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }
  return lang;
}

getLanguage(Type.Strong, 1);

// 交叉类型与联合类型
interface DogInterface {
  run(): void
}
interface CatInterface {
  jump(): void
}
// 交叉类型 并集
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {},
};
// 联合类型
let a1: number | string;
// 字面量联合类型
let b1: 'a' | 'b' | 'c';
let c1: 1 | 2 | 4;

class Dogs implements DogInterface {
  run() {}
  eat() {}
}
class Cats implements CatInterface {
  jump() {}
  eat() {}
}
enum Master { Boy, Girl };
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dogs() : new Cats();
  pet.eat();
  // pet.run();
  return pet;
}
interface Square {
  kind: 'square';
  size: number;
}
interface Rectangle {
  kind: 'rectangle',
  width: number;
  height: number;
}
interface Circle {
  kind: 'circle';
  r: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
  switch(s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.width * s.height;
    case 'circle':
      return Math.PI * s.r ** 2;
    default: 
      return ((e: never) => {throw new Error(e)})(s);
  }
}
// 索引类型
let obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
// function getValues(obj: any, keys: string[]) {
//   return keys.map(key => obj[key]);
// }
// console.log(getValues(obj1, ['a', 'b']));
// console.log(getValues(obj1, ['d', 'f']));

// keyof T
interface Obj {
  a: number;
  b: string;
}
let key: keyof Obj;

// T[K]
let value: Obj['a'];

// T extends U
function getValues<T, K extends keyof T> (obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key]);
}
console.log(getValues(obj1, ['a', 'b']));
// console.log(getValues(obj1, ['d', 'f']));

// 映射类型
interface Obj1 {
  a: string;
  b: number;
  c: boolean;
}
type ReadonlyObj = Readonly<Obj1>;
type PartialObj = Partial<Obj1>;
type PickObj = Pick<Obj1, 'a' | 'b'>;
type RecordObj = Record<'x' | 'y', Obj1>;