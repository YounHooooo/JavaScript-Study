/**
 * Array Functions
 */

let userMembers = [
    '김지우',
    '이세라',
    '박민수',
    '정지연',
    '최태영',
    '한은지',
];

console.log(userMembers);

// push()
userMembers.push('홍길동');
console.log(userMembers);

console.log('--------------');

// pop()
console.log(userMembers.pop());
console.log(userMembers);

console.log('--------------');
//shift()
console.log(userMembers.shift());
console.log(userMembers);

// unshift()
console.log(userMembers.unshift('홍길동'));
console.log(userMembers);

// splice()
console.log(userMembers.splice(0, 3));
console.log(userMembers);

userMembers = [
    '김지우',
    '이세라',
    '박민수',
    '정지연',
    '최태영',
    '한은지',
];

console.log(userMembers);

// concat()
console.log(userMembers.concat('홍길동'));
console.log(userMembers);

console.log('--------------');

// slice()
console.log(userMembers.slice('0, 5'));
console.log(userMembers);

// spread operator
let userMembers2 = [
    ...userMembers,
];
console.log(userMembers2);

let userMembers3 = [
    userMembers,
];
console.log(userMembers3);

console.log('-----------');
let userMembers4 = userMembers;

console.log(userMembers4);
console.log(userMembers4 === userMembers);

// join()
console.log(userMembers.join());
console.log(userMembers.join('/'));
console.log(userMembers.join(', '));

// sort()
// 오름차순
userMembers.sort();
console.log(userMembers);

console.log(userMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

// a, b를 비교했을때
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래를 순서를 그대로 두려면 0을 반환

numbers.sort((a, b)=> {
    return a > b ? 1: -1;
});
console.log(numbers);

numbers.sort((a,b) => a > b ? -1 : 1);
console.log(numbers);

// map ()
console.log('------------');
console.log(userMembers.map((x) => x));
console.log(userMembers.map((x) => `멤버: ${x}`));

console.log(userMembers.map((x) => {
    if(x === '김지우'){
        return `멤버: ${x}`;
    } else {
        return x;
    }
}));
console.log(userMembers);

// filter()
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 === 0));

// find()
console.log(numbers.find((x) => x  % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));