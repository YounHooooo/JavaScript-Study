/**
 * Immutable Object
 */
const yujin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yujin);

/**
 * Extensible
 */
console.log(Object.isExtensible(yujin));

yujin['position'] = 'vocal';

console.log(yujin);

Object.preventExtensions(yujin);

console.log(Object.isExtensible(yujin));

yujin['groupName'] = '아이브';
console.log(yujin);

delete yujin['position'];
console.log(yujin);

/**
 * Seal
 */

const yujin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yujin2);

console.log(Object.isSealed(yujin2));

Object.seal(yujin2);

console.log(Object.isSealed(yujin2));

yujin['groupName'] = '아이브';
console.log(yujin2);

delete yujin2['name'];
console.log(yujin2);

Object.defineProperty(yujin2, 'name', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yujin2,'name'));

/**
 * Freezed
 * 동결
 * 읽기 외에 모든 기능을 불가능하게 만듬
 */

const yujin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yujin2));

Object.freeze(yujin3);
console.log(Object.isFrozen(yujin2));

yujin3['groupName'] = '아이브';
console.log(yujin3);

delete yujin3['name'];
console.log(yujin3);

// Object.defineProperty(yujin3, 'name', {
//     value: '코드팩토리',
// })
console.log(Object.getOwnPropertyDescriptor(yujin3, 'name'));

const yujin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yujin4);
console.log(Object.isFrozen(yujin4));
console.log(Object.isFrozen(yujin4['wonYoung']));
