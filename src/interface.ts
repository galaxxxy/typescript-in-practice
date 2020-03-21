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