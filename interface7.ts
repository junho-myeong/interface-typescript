interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string, age?: number): void {
  console.log(`안녕하세요 저는 ${name} 입니다. 나이는 ${age} 입니다.`)
}

helloPerson('junho', 29)
