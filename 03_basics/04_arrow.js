// const user = {
//     username:"sudi",
//     price:999,
//     websitemessage : function () {
//         console.log(`${this.username} , welcome to my wesite`);
//         console.log(this);
//     }
// }
// user.websitemessage();
// console.log(this);

// // using this inside function
// function one(){
//     // console.log(this);
//     //output
//     //   Object [global] {
//     //     global: [Circular *1],
//     //     clearImmediate: [Function: clearImmediate],
//     //     setImmediate: [Function: setImmediate] {
//     //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     //     },
//     //     clearInterval: [Function: clearInterval],
//     //     clearTimeout: [Function: clearTimeout],
//     //     setInterval: [Function: setInterval],
//     //     setTimeout: [Function: setTimeout] {
//     //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     //     },
//     //     queueMicrotask: [Function: queueMicrotask],
//     //     structuredClone: [Function: structuredClone],
//     //     atob: [Getter/Setter],
//     //     btoa: [Getter/Setter],
//     //     performance: [Getter/Setter],
//     //     fetch: [Function: value],
//     //     crypto: [Getter]
//     //   }

//     let user = "ashi";
//     console.log(this.user);//gives undefined as output 
// }
// one();

//using this inside arrow function

// const arrowOne = () => {
//     // console.log(this);//gives {} as output
//     let user = 'sudi';
//     console.log(this.user);//gives undefined 
// }
// arrowOne();

// NOTE: THIS keyword na to arrow function aur na hi normal function mein variables ko access kr skta hai . Wo output mein undefined hi deta hai no matter aapne ek variable ko value assign ki hai ya 
//EXPLICIT RETURN
// const add = (num1 , num2) => {
//     return num1+num2;
// }
// console.log(add(1,2));

//IMPLICT RETURN
const addone = (num1, num2) => (num1 + num2);
console.log(addone(1,2));

