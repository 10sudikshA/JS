
function login(username){
    if(username === undefined){
        console.log("Please enter a name");
        return;
    }
    let d = new Date();
    // let ts = Date.now();
    return `${username} logged in at ${d.toLocaleDateString()}`;
};

let user = login();
console.log(user);
