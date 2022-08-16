"use strict";
class Person {
    // 생성자 함수를 통해 변수를 초기화 하는것이다.
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요 저는 ${this.name} 입니다.`);
    }
}
const person = new Person('mark'); // 인스턴스를 생성하는 방법(변수의 타입을 설정할때는 class 이름이 아니고 interface를 구현하는것이기 떄문에 interface 타입으로 해주는것이 좋다.)
person.hello();
