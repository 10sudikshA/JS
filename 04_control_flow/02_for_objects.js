const myobject ={
    js:"javascript",
    py:"python",
    css:"cascading style sheets"
 }
// for (const [key,value] of myobject) {
//     console.log(key,"--->",value);
    
// }objects are not iterable by for each loop as maps 

for (const key in myobject) {
   console.log(myobject[key]);
}

//for in loop
const coding = ['js','py','java','cpp'];
coding.forEach(function(item){
    console.log(item+"aaaaa");
});
coding.forEach((item,index,array)=>{
    console.log(item,index,array);
});

const dbOutput = [
    {
    filename:"hello",
    filetype:"java"
    }
    ,
    {
    filename:"hiii",
    filetype:"js"
    },
    {
    filename:"bye",
    filetype:"cpp"
    }
]
dbOutput.forEach((item,index)=>{
    console.log(item, " is at index ",index);
})
//for each loop kuch bhi return ni krta h undfined rehta h