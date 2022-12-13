"use strict";
exports.__esModule = true;
// 定义枚举类型
var Direction;
(function (Direction) {
  Direction[(Direction["LEFT"] = 0)] = "LEFT";
  Direction[(Direction["RIGHT"] = 1)] = "RIGHT";
})(Direction || (Direction = {}));
var d1 = Direction.LEFT;
function turnDirection(direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log("角色向左移动一个格子");
      break;
    case Direction.RIGHT:
      console.log("角色向右移动一个格子");
      break;
  }
}
// 监听键盘的点击
turnDirection(Direction.LEFT);
