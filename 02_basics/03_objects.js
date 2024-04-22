//singleton ...create when object is created using constructor
Object.create;

//Literals
//take a symbol and use it as a key in object and print its value
const mySym = Symbol("key1");
const o1 = {
    name:"sudi",
    "full Name":"Sudiksha Gupta",
    age:20,
    [mySym]: "mykey1",
    email:"sudi123@gmail.com",
    
   
}
//accessing values of key of objects
//keys are always by default takemn in stairng format
//value can be anything
console.log(o1.name);
// console.log(o1.full Name);//cannot be accessed... syntax error
console.log(o1["full Name"]);
console.log(o1["name"]);

console.log(o1[mySym]);
//changing value of a key in given object
o1.age=21;
console.log(o1.age);
//freezing a object so that its values can not be changed
// Object.freeze(o1);
o1.age=30;
console.log(o1.age);
o1.f1 = function(){
    console.log("hello js user");
        
}
console.log(o1.f1());
console.log(o1.f1);
o1.f2 = function(){
    console.log(`hello baby ${this.name}`)
}
console.log(o1.f2());