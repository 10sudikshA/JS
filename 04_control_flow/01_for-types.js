//for of loop
let arr = [1,2,3,4,5,6];
for (const elem of arr) {
    console.log(elem);
    
}
let greetings = "Hello world!";
for (const greet of greetings) {
    console.log(greet);
}

//MAP
const m = new Map();
m.set('IN','INDIA');
m.set('USA','AMERICA');
m.set('NY','NEWYORK');
m.set('EU','EUROPE');
m.set('AUS','AUSTRALIA');
console.log(m);

console.log(m.get('NY'));
for (const key of m) {
    console.log(key);
    
}
for (const [key,value] of m) {
    console.log(key+"------>>>>"+value);
    
}
