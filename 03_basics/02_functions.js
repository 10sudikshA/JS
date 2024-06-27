//adding items to cart problem using rest operator
//rest operator and spread operator are represented as ...
//rest operator encapusulate many values into single array 

function addToCart(...item){
    console.log(item);
};

addToCart(10,20,30,1000,3000);

// passing objects to function 
let object1 ={
    username:"sam",
    price:399
}
function handleObjects(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObjects(object1);

//passing array to function
let arr =[10,20,30];
function printSecondValue(anyArray){
    console.log(anyArray[1]);
}
printSecondValue(arr);