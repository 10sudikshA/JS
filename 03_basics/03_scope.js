// var c = 3000;
// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
//     console.log(a);
//     console.log(b);
//     console.log("Inner :",c);

// }
// console.log(c);


// function one(){
//     username = "sudi";
//     function two(){
//         lastname="gupta";
//         console.log(username);//ye apne parent function ke variables ko access kr skta h kyuki parent functiion ke variables and methods iske liye global scope mein hain
//     }
//     two();
//     // console.log(lastname);//ye lastname variable access ni kr skta kyuki wo is one function ke child function ke local scope mein hai
// }
// // one();


// if(true){
//   const  username = "chai aur code"
//     if(username === "chai aur code"){
//         const website = " javascript series"
//         // console.log(username+website);
//     }
//     // console.log(website); error
// }
// console.log(username); error

console.log(addone(5));
function addone(num){
    return num+1;
}

// console.log(addtwo(5));
const addtwo = function(num){
    return num+2;
}
console.log(addtwo(5));
