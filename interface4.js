"use strict";
const p41 = {
    name: 'junho',
    age: 29,
    hello: function () {
        console.log(`안녕하세요 ${this.name} 입니다`);
    }
};
const p42 = {
    name: 'junho',
    age: 29,
    hello() {
        console.log(`안녕하세요 ${this.name} 입니다`);
    }
};
// const p43: person4 = {
//   name: 'junho',
//   age: 29,
//   hello: (): void => {
//     console.log(`안녕하세요 ${this.name} 입니다`)
//   }
// }
p41.hello();
p42.hello();
