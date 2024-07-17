/** Hoisting 호이스팅 */
/** 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */
console.log('Hello');
console.log('World');
console.log('--------------');

console.log(name);
var name = '홍길동';
console.log(name);


var name;
console.log(name);
name = '홍길동';
console.log(name);


console.log(yujin);
let yujin = '안유진';

