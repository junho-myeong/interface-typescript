"use strict";
function hello2(person) {
    console.log(`안녕하세요 ${person.name} 입니다.`);
}
hello2({ name: 'mark', age: 29 });
hello2({ name: 'anna' }); // 의도적으로 객체의 프로퍼티를 사용하지 않을수도 잇다.
