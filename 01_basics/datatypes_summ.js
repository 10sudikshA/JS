//js is a dynamically typed language i.e. no need to define the data type before
//primitive and no n primitive (reference) datatypes

//PRIMITIVE DATA TYPES:
//7 types: String, number, boolean, null, undefined, symbol, BigInt

const str = "abd";
console.log(typeof(str));//string

const baseten = 100;
const decimal = 100.01;
console.log(typeof(decimal));//number

const N = null;
console.log(typeof(N));//object

// const a; 
const b = undefined;//undefined
console.log(typeof(b));//undefined

const id = Symbol("123");
const id2 = Symbol("123");
console.log(id===id2);// return false because symbol always returns a unique value even when same value is passed
console.log(typeof(id));//symbol

const bigN = 12345678901098755976n;
console.log(typeof bigN)//bigint

const bool = true;
console.log(typeof bool);//boolean


//Non primitive datatypes:
// Array,Objects, functions

const arr = ["1",2,80.90];
console.log(typeof(arr));//object

//OBJ
const OB1 = {
    name:"sudi",
    age:20
}
console.log(typeof(OB1));//object 

const func1 =  function(){
    console.log("HELLO WORLD");
}
func1();
console.log(typeof func1);//function


