/**
 * Object / 객체
 */

// key : value pair

let younHo = {
    name: '이윤호',
    age: '30',
    city: 'Anyang',
    hobby: function() {
        return `${this.name}의 취미는 영화시청입니다.`;
    }
};

console.log(younHo);

const key = 'name';

console.log(younHo[key]);

console.log(younHo.hobby());

const nameKey = 'name';
const nameValue = '이윤호';

const ageKey = 'age';
const ageValue = '30';

const younHo2 = {
    [nameKey]: nameValue,
    [ageKey]: ageValue,
    hobby: function() {
        return `${this.name}의 취미는 영화시청입니다.`;
    }
}

console.log(younHo2);
console.log(younHo2.hobby());

younHo2['startName'] = '이';
console.log(younHo2);

younHo2['endName'] = '윤호';
console.log(younHo2);

delete younHo2['endName'];
console.log(younHo2);

/**
 * const로 선언된 객체의 특징
 * 
 * 1) const로 선언할경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */

const wonYoung = {
    name: '장원영',
    group: '아이브'
};
console.log(wonYoung);

wonYoung['group'] = '코드팩토리';
console.log(wonYoung);


/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안유진';

const yujin3 = {
    name,
};

console.log(yujin3);