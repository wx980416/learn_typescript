class Person {
  // 语法糖
  constructor(public name: string, private _age: number, readonly height: number, protected _page: number) {}

  running() {
    console.log(this._age, 'eating')
  }
}

const p = new Person('wangxin', 18, 1.88, 24)
console.log(p.name, p.height)

// p.height = 1.98

export {}
