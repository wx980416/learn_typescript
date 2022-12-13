class Person {
  // 私有属性: 属性前面会使用_
  private _name: string
  private _age: number
  private _page: number

  constructor(name: string, age: number, page: number) {
    this._name = name
    this._age = age
    this._age = page
  }

  running() {
    console.log('running:', this._name)
  }

  // setter/getter: 对属性的访问进行拦截操作
  set name(newValue: string) {
    this._name = newValue
  }

  get name() {
    return this._name
  }

  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue
    }
  }

  get age() {
    return this._age
  }

  set page(newValue: number) {
    this._page = newValue
  }

  get page() {
    return this._page
  }
}

const p = new Person('why', 100, 24)
p.name = 'kobe'
console.log(p.name)

p.age = -10
console.log(p.age)

export {}
