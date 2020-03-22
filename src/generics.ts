// function log<T>(value: T): T {
//   console.log(value);
//   return value;
// }

// log<string[]>(['a', 'b', 'c']);
// log(['a','v']);

// type Log = <T>(value: T) => T;
// let myLog: Log = log;

// interface Log<T = string> {
  //   (value: T): T;
  // }
  // let myLog: Log<number> = log;
  
  class Log<T> {
    run(value: T) {
      console.log(value);
      return value;
    }
  }
  let log1 = new Log<number>();
  log1.run(1);
let log2 = new Log();
log2.run({});

interface Length {
  length: number;
}
function log<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}
