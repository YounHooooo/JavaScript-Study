/**
 * Class Keyword
 */
class IdolModel{
    // 프로퍼티
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
};

// constructor - 생성자

const yujin = new IdolModel('안유진', 2003);
console.log(yujin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(gaeul);
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const eseo = new IdolModel('이서', 2007);
console.log(eseo);

console.log(yujin.name);
console.log(yujin.year);
console.log(yujin.sayName());
console.log(gaeul.sayName());
console.log(ray.sayName());
console.log(wonYoung.sayName());
console.log(liz.sayName());
console.log(eseo.sayName());

console.log(typeof IdolModel);
console.log(typeof yujin);

