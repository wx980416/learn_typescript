interface ICollection {
  // 索引签名 用来描述对象的索引类型
  // 索引签名的类型只能是 number 或 string
  // 索引签名的作用是可以让对象可以通过索引来访问成员
  [index: string]: number

  length: number
}

const names: number[] = [111, 222, 333]
console.log(names[0])
console.log(names[1])
console.log(names[2])

function iteratorCollection(collection: ICollection) {
  console.log(collection[0])
  console.log(collection[1])
}

// iteratorCollection(names)
// const tuple: [string, string] = ["why", "18"]
// iteratorCollection(tuple)

iteratorCollection({ name: 111, age: 18, length: 10 })

export {}
