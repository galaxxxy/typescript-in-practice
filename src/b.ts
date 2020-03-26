/// <reference path="a.ts" />
namespace Shape {
  export function square(x: number) {
    return x * x;
  };
}

Shape.circle(1);
Shape.square(1);
import circle = Shape.circle;
circle(2);