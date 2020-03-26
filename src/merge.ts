interface A1 {
  x: number;
  foo (bar: number): number; // 5
  foo (bar: 'a'): number; // 2
}
interface A1 {
  y: number;
  foo (bar: string): string; // 3
  foo (bar: number[]): number[]; // 4
  foo (bar: 'b'): number; // 1
}
// 函数重载时要注意函数声明的顺序，因为编译器会按顺序进行匹配
// 接口合并时顺序确定的原则： 接口内部按书写顺序决定
// 接口之间：后声明的会排在前面
// 拥有字符字面量参数的函数会排在第一位
let aa2: A1 = {
  x: 1,
  y: 1,
  foo(bar: any) {
    return bar;
  },
};

function Lib() {}
namespace Lib {
  export let version = '1.0';
}
console.log(Lib);

class C1 {}
namespace C1 {
  export let state = 1;
}
console.log(C1.state);

enum Colors {
  Red,
  Yellow,
  Blue,
}
namespace Colors {
  export function mix() {};
}
console.log(Colors);
