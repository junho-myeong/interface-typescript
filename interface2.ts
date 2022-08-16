interface Person2 {
  name: string,
  age?: number // 상황에 따라 필요할수도 잇고 필요하지 않는 property경우 ?로 나타내준다.
}

function hello2(person: Person2): void {
  console.log(`안녕하세요 ${person.name} 입니다.`)
}

hello2({ name: 'mark', age: 29 })
hello2({ name: 'anna' }) // 의도적으로 객체의 프로퍼티를 사용하지 않을수도 잇다.