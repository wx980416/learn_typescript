class Person {}

interface ICTORPerson {
  new (): Person // 构造签名
}

function factory(fn: ICTORPerson) {
  const f = new fn()
  return f
}

factory(Person)
