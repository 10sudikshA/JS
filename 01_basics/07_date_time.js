//date
let dateObj = new Date();
// console.log(dateObj);
// console.log(dateObj.toString());
// console.log(dateObj.toDateString());
// console.log(dateObj.toISOString());
// console.log(dateObj.toTimeString());
// console.log(dateObj.toJSON());
// console.log(dateObj.toLocaleString());
// console.log(dateObj.toLocaleDateString());
// console.log(typeof dateObj);//object


// let createdDate = new Date(2024,3,20);
// console.log("My created date is : ", createdDate.toDateString());

// let d2 =  new Date("2003-12-10");//yyyy-mm-dd
// console.log(d2.toLocaleString());
// let d3 = new Date("07-15-2002");//mm-dd-yyyy
// console.log(d3.toLocaleString());
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let ts = Date.now();
console.log(ts);//time stamp in mili sec
//convert time stamp into sec from mili sec
console.log(dateObj.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(dateObj.getDay());
console.log(dateObj.toLocaleString("default",{weekday:"long"}));