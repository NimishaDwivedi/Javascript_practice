
const promise1 = function getColdDrinks(){
    return new Promise((resolve,reject)=>{
        resolve("cold drink");
    })
}

const promise2 = function getButter(){
    return new Promise((resolve,reject)=>{
        resolve("Butter");
    })
}

Promise.all([promise1(),promise2()]).then((value)=>console.log(value));
// here we didn't use map because qki yha function name k sath hi function call kr diya, whereas in promise_all.js file we use map because udhar pr function yha k jese call nhi kiya tha 
// udhar map se function call kiya tha 


async function promises(){
    let promisefulfill = await Promise.all([promise1(),promise2()]);
    console.log(promisefulfill);
}
promises();