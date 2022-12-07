const names: string[] = ["abc", "cba", "nba"];

// 匿名函数是否需要添加类型注解呢? 最好不要添加类型注解
// ps：ts 会根据上下文进行推导
names.forEach(function (item, index, arr) {
  console.log(item, index, arr);
});

export {};
