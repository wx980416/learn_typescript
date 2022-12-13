// public
// private
// protected

class Person {
  protected name: string // 受保护的成员属性: 只能在类内部和子类中访问
  private age: number // 私有成员属性: 只能在类内部访问

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // 方法变成私有方法: 只有在类内部才能访问
  private eating() {
    console.log('吃东西', this.age, this.name)
  }
}

const p = new Person('why', 18)
// console.log(p.name, p.age)
// p.name = "kobe"
// p.eating()

// 子类中是否可以访问
class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }

  studying() {
    console.log('在学习', this.name)
  }
}

const stu = new Student('why', 18)
