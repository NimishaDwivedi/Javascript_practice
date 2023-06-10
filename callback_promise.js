//promise

function child(err){
    console.log("avisha");
    console.log(err);
}
function parents(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a=="avii"&&b=="nimi"){
                resolve("no error");
            }
            else{
                reject("error");
            }
        },2000)
        
    }
    )
}
parents("avii","nimi")
.then(err=>child(err))
.catch(err=>console.log(err))

//call back
function child_1(){
    console.log("Anisha");
}
function parents_1(a,b,my_function){
    if(a=="avii"&&b=="nimi"){
        my_function()
    }
    else{
        console.log("error")
    }
}
parents_1("avii","nimi",child_1);