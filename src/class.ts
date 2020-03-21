abstract class Animal {
  eat() {
    console.log('eat');
  }
  abstract sleep(): void
}
// let animal = new Animal();

class Dog extends Animal{
  constructor(name: string) {
    super();
    this.name = name;
  }
  public name: string = 'dog'
  run() {}
  private pri() {}
  protected pro() {}
  readonly legs: number = 4
  static food: string = 'bones'
  sleep() {
    console.log('dog sleep');
  }
}

console.log(Dog.prototype);
let dog = new Dog('wangwang');
console.log(dog);
// dog.pri();
// dog.pro();
// dog.food;
console.log(Dog.food);
dog.eat();

class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name);
    this.color = color;
    // this.pri();
    this.pro();
  }
  // color: string
}
console.log(Husky.food);

// 多态
class Cat extends Animal {
  sleep() {
    console.log('cat sleep');
  }
}
let cat = new Cat();
let animals: Array<Animal> = [dog, cat];
animals.forEach(animal => animal.sleep());

// this类型
class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}

new WorkFlow().step1().step2();

class MyFlow extends WorkFlow {
  next() {
    return this;
  }
}

new MyFlow().next().step1().next().step2();