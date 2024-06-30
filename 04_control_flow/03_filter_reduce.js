// const arr = [1,2,3,4,5,6,7,8,9,10];

// const newArr = arr.filter( (nums) => (nums>5 ));
// console.log(newArr);

// const books = [
//     {title:"book one",genre:"history",publish:"1999",edition:"2004"},
//     {title:"book two",genre:"fiction",publish:"1999",edition:"2024"},
//     {title:"book 3",genre:"horror",publish:"2006",edition:"2008"},
//     {title:"book 4",genre:"history",publish:"1999",edition:"2004"},
//     {title:"book 5",genre:"geo",publish:"1990",edition:"2010"},
//     {title:"book 6",genre:"history",publish:"2001",edition:"2004"},
//     {title:"book 7",genre:"history",publish:"1969",edition:"2022"},
//     {title:"book 8",genre:"history",publish:"2000",edition:"2019"},
//     {title:"book 9",genre:"history",publish:"1999",edition:"2004"},
//     {title:"book 10",genre:"history",publish:"1899",edition:"2021"}
// ]

// const userHis =  books.filter ( (book) => {
//  return book.genre === "history"
// });
// // console.log(userHis);
// const afterPub = books.filter ((bk) => {
//     return bk.publish>="2000"
// });
// console.log(afterPub);

const arr = [1,2,3,4,5,6,7,8,9,10];
const arrTen = arr.map( (num) => num+10);
console.log(arrTen);

//CHAINING
const newArr = arr.map( (num) => { return num*10 }) .filter( (num) => {return num%3===0});
console.log(newArr);
//REDUCE FUNCTION 
const initialVal = 0 ;
const cdf = arr.reduce( (acc,curr) =>  acc+curr,initialVal );
console.log(cdf);
//ADDING ALL THE VALUES OF SHOPPING CART
const cart = [ 
    {
        course:"java",
        price:2999
    }
    ,
    {
        course:"javascript",
        price:299
    }
    ,
    {
        course:"py",
        price:999
    }
    ,
    {
        course:"java development",
        price:3999
    }
    ,
    {
        course:"android dev",
        price:8999
    }
];
const total = cart.reduce( (acc,curr) =>  {
    console.log(acc, "===>>>", curr);
    return acc+curr.price
},0);
console.log(total);