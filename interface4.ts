interface Person4 {
  name: string,
  age: number,
  hello(): void; // 매개변수 없이 void라는 인터페이스를 만든다. 그래서 인스턴스를 생성할때 만들어 내야한다.
}

const p41: Person4 = {
  name: 'junho',
  age: 29,
  hello: function (): void {
    console.log(`안녕하세요 저는 ${this.name} 입니다.`)
  }
}

const p42: Person4 = {
  name: 'mark',
  age: 39,
  hello(): void {
    console.log(`안녕하세요 저는 ${this.name} 입니다.`)
  }
}

// arrow function에서는 this사용시 주의 해야한다.
// const p43: Person4 = {
//   name: 'mark',
//   age: 39,
//   hello: (): void => {
//     // console.log(`안녕하세요 저는 ${this.name} 입니다.`) // arrow function에서 this는 함수의 선언 부분에 해당하는것이다.
//     console.log(`안녕하세요 저는 ${this.name} 입니다.`)
//   }
// }

p41.hello()
p42.hello()