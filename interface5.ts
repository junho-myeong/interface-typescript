// interface로 class만들기
// interface는 컴파일 타임에만 사용하고 컴파일 후에는 사라져 버린다.
interface Iperson1 {
  name: string,
  age?: number,
  hello(): void
}

class Person implements Iperson1 {
  name: string;
  age?: number | undefined;
  // 생성자 함수를 통해 변수를 초기화 하는것이다.
  constructor(name: string) {
    this.name = name
  }
  hello(): void {
    console.log(`안녕하세요 저는 ${this.name} 입니다.`)
  }
  //   hello: function (): void {
  //   console.log(`안녕하세요 저는 ${this.name} 입니다.`)
  // }

}

const person: Iperson1 = new Person('mark') // 인스턴스를 생성하는 방법(변수의 타입을 설정할때는 class 이름이 아니고 interface를 구현하는것이기 떄문에 interface 타입으로 해주는것이 좋다.)
person.hello()