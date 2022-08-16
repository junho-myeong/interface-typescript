"use strict";
function hello4(person) {
    console.log(`안녕하세요 ${person.name} 입니다.`);
}
const p31 = {
    name: 'junho',
    age: 29
};
const p32 = {
    name: 'hee',
    syster: ['soyeon', 'hayeon', 3]
};
const p33 = {
    name: 'bok',
    fater: p31,
    moter: p32
};
hello4(p31);
hello4(p32);
hello4(p33);
