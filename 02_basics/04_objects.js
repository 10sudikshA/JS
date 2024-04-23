//singleton object creation
const tinderUser = new Object();
// console.log(tinderUser);//empty object {}
tinderUser.name="sudiksha";
tinderUser.id="123";
tinderUser.status="Single";
// console.log(tinderUser);
// const to = {}
// console.log(to);
//nested objects
const regularUser={
    id:123,
    fullname:{
        userFullName:{
            name:"sudiksha Gupta"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName);
// console.log(regularUser.fullname?.userFullName);//. It utilizes the optional chaining operator (?.), which is used to access properties of an object that may be undefined or null without causing an error.
// //merging two objects 
const o1= {1:'a',2:'b'};
const o2= {3:'c',4:'d'};
// const o3 = {o1,o2};
// console.log(o3);
// console.log(o1+o2);
// const correctO3 = Object.assign({},o1,o2);
// console.log(correctO3);
//merging using spread operator
// const sp = {...o1,...o2};
// console.log(sp);
//when data comes from a database in form of array of objects
const database = [
    {a:'1',b:'2'},
    {},
    {}
]
console.log(database[0]["a"]);
//to access all the keys of an object 
console.log(Object.keys(regularUser));//return array of keys
//to access all the values of an object 
console.log(Object.values(regularUser));//return array of values
console.log(Object.entries(regularUser));//return array of array of key value pair [['id',123],[etc]]
//to check whether a given object have a particular property or not
console.log(regularUser.hasOwnProperty('name'));