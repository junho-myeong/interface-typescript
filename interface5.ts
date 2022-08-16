interface Iperson1 {
  name: string
  age?: number
  hello(): void
}

class Person implements Iperson1 {// interface는 그 내부에 속성을 무조건 구현해야한다.
  name: string // 선언만 하면 되는것이 아니고 무조건 구현해야해서 10을 구현해야한다.
  age?: number | undefined
  constructor(name: string) {
    this.name = name;
  }
  hello(): void {
    console.log(`안녕하세요 ${this.name} 입니다.`)
  }
}

const persontest: Iperson1 = new Person('junho')
console.log(persontest.name)
persontest.hello()