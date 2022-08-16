"use strict";
// function hello1(person: { name: string, age: number }): void {
//   console.log(`안녕하세요 ${person.name} 나이는 ${person.age} 입니다`)
// }
// 현재 이 코드는 위에 파라미터와 동일한 객체 구조를 가지게 되는것이다.
// const person1: { name: string, age: number } = {
//   name: 'junho',
//   age: 29
// }
// hello1(person);
// JS에서는 인터페이스와 관련된 부분은 전혀 존재하지 않는다.
function hello2(person) {
    console.log(`안녕하세요 ${person.name} 나이는 ${person.age} 입니다`);
}
const person = {
    name: 'junho',
    age: 29
};
hello2(person);
