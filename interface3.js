"use strict";
function hello3(person) {
    console.log(`안녕하세요 저는 ${person.name} 입니다.`);
}
const p31 = {
    name: 'junho1',
    age: 29
};
const p32 = {
    name: 'junho2',
    sisters: ['hee1', 'hee2']
};
const p33 = {
    name: 'junho3',
    father: p31,
    mother: p32
};
