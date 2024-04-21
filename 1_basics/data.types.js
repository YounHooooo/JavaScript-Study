/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (정의되지 않음)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function 함수
 *    Array 배열
 *    Object 객체
 */

// Number 타입

const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('-------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
// console.log(infinity);


// String 타입
const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

const ive = "'아이브' 안유진"
console.log(ive);

/**
 * Template Literal
 * 
 * Escaping Character
 * 
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력
 */
console.log('-------------');
const iveYujin = '아이브\n안유진'
console.log(iveYujin);
const iveWonYoung = '아이브\t코드팩토리';
console.log(iveWonYoung);
