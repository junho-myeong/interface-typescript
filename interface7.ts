interface HelloPerson {
  (name: string, age?: number): void
}

// 구현체는 무조건 interface에 규칙에 따라야 한다.
const helloPerson: HelloPerson = function (name: string) {
  console.log(`안녕하세요~ ${name} 입니다.`)
}

helloPerson('junho')
