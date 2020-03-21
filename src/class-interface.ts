interface Human {
  // new (name: string): void
  name: string;
  eat(): void;
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string
  eat() {}
  sleep() {}
}

// 接口的继承
// 接口继承接口
interface Man extends Human {
  run(): void;
}
interface Child {
  cry(): void;
}
interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  cry() {},
  eat() {},
};
// 接口继承类
class Auto {
  state = 1
  // 接口能够抽离出类的公有、私有和受保护成员
  // private state2 = 0;
}

interface AutoInterface extends Auto {
}
// 接口只能约束类的公有成员
class C implements AutoInterface {
  state = 1
}

class Bus extends Auto implements AutoInterface {}