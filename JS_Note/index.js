// const myButton = document.getElementById('myButton');
// const output = document.getElementById('output');

// myButton.addEventListener('contextmenu', function(evnet) {
//     output.textContent = '마우스 우클릭!';
// });

// function Parson(name, age) {
//     this.name = name;
//     this.age = age;
//     this.walk = function() {
//         return("걷는중");
//     }
// }

// const p1 = new Parson("이윤호", 30);
// const p2 = new Parson("이승호", 29);

// console.log(p1.walk());

// let array = [1,2,3,4]
// let [a,b] = array

// console.log(a,b);

// let person = {name: 'younho', age: 30}
// let person2 = {...person}
// console.log(person2);

// let a = [1, 2]
// let b = [...a,3]

// let c = [...a,...b]
// console.log(c);

// 삼항연산자
// let person = { name: "Younho", age: 30 };

// if(person) {
//     console.log(person.name)
// } else {
//     console.log("there is no person")
// }

// console.log(person ? person.name : "there is no person");

// const title = document.getElementById("output");
// console.log(title);

// const title = document.querySelector("h2");
// console.log(title);

// title.innerText = "안녕하세요!";
// title.style.color = "blue";

// const title = document.createElement("h1");
// const body = document.querySelector("body");

// title.innerText = "새로운 친구에요!";
// title.style.color = "skyblue";

// body.appendChild(title);

// const button = document.querySelector("button");
// const removeButton = document.querySelector(".remove");

// function handler(event) {
//   console.log("★");
// }

// function removeHandler(event) {
//   button.removeEventListener("click", handler);
// }

// button.addEventListener("click", handler);
// removeButton.addEventListener("click", removeHandler);

// // if문
// const a = 10;
// const b = 20;

// if (a < b) {
//   console.log("a가 더 작아요");
// }

// // switch문

// const number = 10;

// switch (number) {
//   case 1:
//     console.log(number);
//     break;
//   case 2:
//     console.log(number);
//     break;
//   default:
//     console.log("아무것도 해당되지 않아요");
// }

// 모듈러 홀짝

// const number = 10;

// if (number % 2 === 0) {
//   console.log("짝수");
// } else {
//   console.log("홀수");
// }

// switch (number % 2) {
//   case 0:
//     console.log("짝수");
//     break;
//   case 1:
//     console.log("홀수");
//     break;
// }

// // for문
// for (let i = 1; i < 8; i++) {
//   console.log(i);
// }
// for (let i = 0; i < 10; i++) {
//   if (i === 7) {
//     // continue;
//     // break;
//   }
//   console.log(i);
// }

// 함수
// function bok(main) {
//   console.log(`${main}볶음밥`);
// }

// bok("새우");
// bok("김치");
// bok("제육");

// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(10, 20));

const hello = () => {
  console.log("Hello");
  console.log("asd");
};

const sum = (a, b) => {
  return a + b;
};
console.log(sum(10, 20));

const greeting = (user) => {
  console.log(`Hello, ${user}`);
};
greeting("이윤호");
