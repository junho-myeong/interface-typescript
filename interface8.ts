// read-only property를 사용하면 한번 할당한 값에 대해서는 
// 다음에 값을 재할당 할수 없다.
// property를 사용하게 되면 절대 변하지 않는 값에 대해서 코드에 의도를 담아 줄수 잇는 것이다.
interface Person8 {
  name: string,
  age: number,
  readonly gender: string
}

const p81: Person8 = {
  name: 'junho',
  age: 29,
  gender: 'male'
}

// p81.gender = 'female'