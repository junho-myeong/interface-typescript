"use strict";
function hello1(person) {
    console.log(`안녕하세요 저는 ${person.name} 입니다. 나이는 ${person.age} 입니다`);
}
const p1 = {
    name: 'junho',
    age: 29
};
hello1(p1);
