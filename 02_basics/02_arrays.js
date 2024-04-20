const marvel = ["hulk","ironman","dr.stange"];
const dc = ["superman","flash","batman"];
// marvel.push(dc);
// console.log(marvel);
// const all = marvel.concat(dc);
// console.log(all);
//spread operator
const sp = [...marvel,...dc]
console.log(sp);
const bhasad = [1,2,3,[4,5,6],[21,11,[90]]];
const sorted_bhasad = bhasad.flat(Infinity);
console.log(sorted_bhasad);
//converting from anything to array
console.log(Array.from("sudi"));
console.log(Array.isArray(123));
let newOBJ = {
    name:"abc",
    age:12
}
console.log(Array.from(newOBJ.name));
sc1 =10;
sc2 =20;
sc3=30;
console.log(Array.of(sc1,sc2,sc3));