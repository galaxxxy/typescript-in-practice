// 接口定义对象
interface List {
  readonly id: number;
  name: string;
  // [x: string]: any;
  age?: number;
};
interface Result {
  data: Array<List>;
};
function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
    // value.id ++;
  });
}
let result = {
  data: [
    {id: 1, name: 'A'},
    {id: 2, name: 'B'},
  ],
};
render(result);
// render({
//   data: [
//     {id: 1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'},
//   ],
// } as Result);
// render(<Result>{
//   data: [
//     {id: 1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'},
//   ],
// });

// 数字索引的接口
interface StringArray {
  [index: number]: string;
}
let chars: StringArray = ['A', 'B'];

// 字符串索引的接口
interface Names {
  [x: string]: string;
  // y: number;
  [z: number]: string;
}

// 接口定义函数
// let add: (x: number, y:number) => number;

// interface Add {
//   (x: number, y:number): number;
// }
type Add = (x: number, y:number) => number;
let adds: Add = (a, b) => a + b;

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = '1.0';
  lib.doSomething = () => {};
  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();