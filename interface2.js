"use strict";
// 한프로젝트 내부에서 다른 파일이라도 인터페이스의 이름이 같으면 같은 인터페이스로 간주한다.
// interface person1 {
//   name: string;
//   age?: number; // name은 꼭 잇어야하는 속성이지만, age는 잇어도 되고 없어도 되는 속성이라면 ? 를 사용한다.
// }
function hello3(person) {
    console.log(`안녕하세요 ${person.name} 입니다.`);
}
hello3({ name: 'junho', age: 29 });
hello3({ name: 'hee' });
