// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest,
};
console.log(Role.Reporter);
console.log(Role[1]);

// 字符串枚举
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了',
};

// 异构枚举
enum Answer {
  N,
  Y = 'Yes',
};

// 枚举成员
// Role.Reporter = 2;
enum Char {
  // const member
  a,
  b = Char.a,
  c = 1 + 3,
  // computed member
  d = Math.random(),
  e = '123'.length,
};

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar,
};
let month = [ Month.Jan, Month.Feb, Month.Mar ];

// 枚举类型
enum E { a, b };
enum F { a = 0, b = 1 };
enum G { a = 'apple', b = 'banana' };

let e: E = 3;
let f: F = 3;
// e === f;

let e1: E.a;
let e2: E.b;
// e1 === e2
let e3: E.a;
e1 === e3

let g1: G = G.b;
let g2: G.a = G.a;