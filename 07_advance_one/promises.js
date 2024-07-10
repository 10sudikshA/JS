// const promiseone = new Promise(function(resolve,reject){
   
//         setTimeout(function(){
//             let err = false;
//             if(!err){
//             console.log("task completed successfully");
//             resolve({username:"sudii",pass:"123"});
//         }
//         else{
//           let error = "Something went wrong";
//             reject(error);
//         }},2000);
       
    
// });
// promiseone
//     .then((user)=>{
//         return user.username ; 
//     })
//     .then((username)=>{
//         console.log(username);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("Promise either resolved  or rejected ");
//     });

//Using Async Await
// const promisetwo = new Promise( (resolve,reject) =>{
//     setTimeout(()=>{
//         let e = false;
//         if(!e){
//             console.log("done");
//             resolve({username:"sudii",pass:"123"});
//         }
//         else{
//             reject('ERR: SOMETHING WENT WRONG');
//         }
//     },2000);
// });

// async function handlepromise(){
//     try{
//         const response  = await promisetwo;
//         console.log(response);
//     }
//     catch(error){
//         // const reject = await promisetwo;
//         console.log(error);

//     }
    
// };
// handlepromise();

//Using fetch

// async function JsonPlaceholder(){
//    const response =  await fetch('https://jsonplaceholder.typicode.com/users');
//  const data = await  response.json();
//  console.log(data);
// }
// JsonPlaceholder();

 fetch('https://jsonplaceholder.typicode.com/users')
   .then((response)=>{
    return response.json();
   })
   .then((res)=>{
    console.log(res);
   })
   .catch(()=>{
    console.log("Error");
   });
