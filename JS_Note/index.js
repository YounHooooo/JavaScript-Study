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
let person = {name:"Younho", age: 30}

// if(person) {
//     console.log(person.name)
// } else {
//     console.log("there is no person")
// }

console.log(person?person.name:"there is no person")