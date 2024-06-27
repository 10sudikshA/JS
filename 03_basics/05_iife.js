//IIFE : IMMIDEATELY INVOLKED FUNCTION EXPRESSIONS
// they are the functions which are executed immediately , sometime while coding we face the broblem of global pollution . To prevent it we use IIfe

// 1. Encapsulation
// IIFE provides encapsulation, allowing you to create private scopes for variables and functions. This prevents variable conflicts and unintended modifications of data in the global scope. Encapsulation is crucial in larger applications and when working with multiple libraries.

// 2. Avoiding Global Pollution
// By encapsulating code within IIFE, you avoid polluting the global namespace. This is particularly important when you want to minimize naming clashes with other scripts or libraries in your project. It keeps your code modular and self-contained.

//(function)() ; 
//1st bracket mein ek function passs krte hai , 2nd bracet shows execution of that function and pass arguments , ; shows termination  used when 2 iife are written consecutevly


// (function chai() {
//     //named iife
//     console.log("DB CONNECTED");

// })();

(() => {
    
    console.log("DB CONNECTED");

})();