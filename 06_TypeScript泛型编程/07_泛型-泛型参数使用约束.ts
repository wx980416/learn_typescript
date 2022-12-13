// 传入的key类型, obj当中key的其中之一
interface IKun {
  name: string
  age: number
}

// keyof 获取对象中所有的key的联合类型 
type IKunKeys = keyof IKun // "name"|"age"

// K extends keyof O 表示K必须是O中的key
function getObjectProperty<O, K extends keyof O>(obj: O, key: K){
  return obj[key]
}

const info = {
  name: "why",
  age: 18,
  height: 1.88
}

const name = getObjectProperty(info, "name")

export {}
