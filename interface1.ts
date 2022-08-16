// 타입을 정의할때 중복 되는 부분이 발생하기 때문에 interface로 만들어서 사용하면 편하다.
// Person1이라는 데이터 구조로 만드는 것이다.
// 우선 코딩을 하고 리팩토링 할때 중복을 줄여 주는 것이 초보자에게는 편하다
// 인터페이스 문법은 실제로 JS로 컴파일 하게 되면 그 코드는 사라지게 되고
// 컴파일 타임에만 에러가 잇는지 체크하는것이다.
interface Person1 {
  name: string,
  age: number
}
function hello1(person: Person1): void {
  console.log(`안녕하세요 저는 ${person.name} 입니다. 나이는 ${person.age} 입니다`)
}

const p1: Person1 = {
  name: 'junho',
  age: 29
}

hello1(p1)

