
// 기본기 전체 복습

/**
 *  Loops
 * 1) for
 * 2) while
 */

for(let i = 0; i < 10; i ++){
    console.log(i);
}

console.log('------------');

for(let i = 10; i > 0; i --){
    console.log(i);
}

// *을 이용해서 6x6의 정사각형 출력
let square = '';
let side = 6;

for(let i = 0; i < 6; i++){
    for(let j = 0; j < side; j++){
        square += '*';
    }
    square += '\n';
}

console.log(square);

/**
 * for...in
 */
const yonnHo = {
    name: '이윤호',
    year: 1995,
    
}

console.log('------------');

for(let key in yonnHo){
    console.log(key);
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log('------------');

for(let key in numberArray){
    console.log(key);
    console.log(`${key}:${numberArray[key]}`);
}



/**
 * for...of
 */
for(let value of numberArray) {
    console.log(value);
}


/**
 * While
 * 조건은 판단하고 코드 실행
 */
let number = 0;

while(number < 10){
    number ++;
}

console.log(number);


/**
 * do...while
 * 코드 먼저 실행 후 조건 판단
 */ 
number = 0;

do{
    number++;
}while (number < 10);

console.log(number);

/** 
 * break
 */
console.log('---------');
for(let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log('---------');
number = 0;

while(number < 10){
    if(number === 5) {
        break;
    }

    number ++;
    console.log(number);
}

/**
 * continue
 */
console.log('---------');
for(let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}