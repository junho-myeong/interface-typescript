interface Person3 {
  name: string,
  // age라는 이름의 프로퍼티가 잇고 이 프로퍼티가 잇는지 없는지 파악 한다.
  age?: number,
  // 속성으로 사용하기 위해 string으로 지정하는것이다, number로 하게 되면 인덱스 처럼 사용가능하다.
  // 선택적 옵션이다.
  [index: string]: any
}

function hello3(person: Person3): void {
  console.log(`안녕하세요 저는 ${person.name} 입니다.`)
}

const p31: Person3 = {
  name: 'junho1',
  age: 29
}

const p32: Person3 = {
  name: 'junho2',
  sisters: ['hee1', 'hee2']
}

const p33: Person3 = {
  name: 'junho3',
  father: p31,
  mother: p32
}
