interface person3 {
  name: string
  age?: number
  [index: string]: any // 인덱스는 어떠한 string에 이름으로 property이름이 가능하다는 뜻이고, 그 값으로 어떠한것도 가능하다
  // ? 와 다른점은 꼭 age라는 이름의 프로퍼티가 와야한다는 뜻이고, indexalbe은 어떠한 이름의 프로퍼티도 가능하다는 뜻이다.
}

function hello4(person: person3): void {
  console.log(`안녕하세요 ${person.name} 입니다.`)
}

const p31: person3 = {
  name: 'junho',
  age: 29
}

const p32: person3 = {
  name: 'hee',
  syster: ['soyeon', 'hayeon', 3]
}

const p33: person3 = {
  name: 'bok',
  fater: p31,
  moter: p32
}

hello4(p31)
hello4(p32)
hello4(p33)