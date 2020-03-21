// 函数定义
function add1(x: number, y:number) {
  return x + y;
}

let add2: (x: number, y: number) => number;

type add3 = (x: number, y:number) => number;

interface add4 {
  (x:number, y:number): number;
}

// add1(1, 2, 3);
// 可选参数(必须位于必选参数之后)
function add5(x:number, y?: number) {
  return y ? x + y : x;
}

function add6(x:number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}
console.log(add6(1, undefined, 3));

// 剩余参数
function add7(x: number, ...rest: Array<number>) {
  return x + rest.reduce((pre, cur) => pre + cur);
}
console.log(add7(1, 2, 3, 4, 5));
// 函数重载
function add8 (...rest: Array<number>): number;
function add8 (...rest: Array<string>): string;
function add8 (...rest: Array<any>): any {
  let first = rest[0];
  if (typeof first === 'string') {
    return rest.join('');
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur);
  }
}
console.log(add8(1, 2, 3));
console.log(add8('1', '2', '3'));