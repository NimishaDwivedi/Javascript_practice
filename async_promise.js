
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

async function promises(){
    let promisefulfill = await Promise.all([promise1(),promise2()]);
    console.log(promisefulfill);
}
promises();