function log<T>(value: T): T {
  console.log(value);
  return value;
}

log<string[]>(['a', 'b', 'c']);
log(['a','v']);

// type Log = <T>(value: T) => T;
// let myLog: Log = log;

interface Log<T = string> {
  (value: T): T;
}
let myLog: Log<number> = log;
