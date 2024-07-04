 function RandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
 }
 let intervalId;
 const f1 = function(){
    document.querySelector('body').style.backgroundColor=RandomColor();
 }
  document.getElementById('start').addEventListener('click',function(){
    intervalId =  setInterval(f1, 1000);
 });    
  document.getElementById('stop').addEventListener('click',function(){
         clearInterval(intervalId);
        
     });