// store function in variable
var Sum = function sumoftwonumber(a, b) {
    var sum = a + b;
    return sum;
}
k = Sum(4, 5);
console.log(k);

//arrow function with name
function dummy(a, b) {
    console.log("avii");
    var addition = (a, b) => {
        console.log("nimi");
        var sum = a + b;
        return sum;
    }
    return addition(a, b);
}

j = dummy(4, 6);
console.log(j);

//arrow function without name
button.addEventListener('click', () => {
    console.log('Button clicked!');
  });

function addition_1(a, b) {
    setTimeout(() => {

        var sum = a + b;
        console.log(sum);
    }, 2000);
}
l = addition_1(9, 10);
console.log(l);

// multiplication
function multiplication(a,b) {
    setTimeout(() => {
        var mul = a * b;
        console.log(mul);
    }, 3000);
}
p = multiplication(5, 6);
console.log(p);


//add 3 numbers
function add3numbers(a,b,c){
    setTimeout(()=>{
        var sum = a+b+c;
        if(sum>10){
            console.log(sum);
        }
        else{
            console.log(-1);
        }
    },4000);
}
add = add3numbers(5,7,2);
console.log(add);

// add numbers with different time out

function add_1(a,b,c){
    var sum = a+b+c;
    if(sum>10){
        setTimeout(()=>{
            console.log(sum,"5 seconds delayed");
        },5000)
    }
    else{
        setTimeout(()=>{
            console.log(sum,"2 seconds delayed");
        },2000);
    }
}
n = add_1(4,5,8);
console.log(n);
m = add_1(2,3,4);
console.log(m);

//display every content of array after 3 seconds

function display_array(arr){
    for(let i=0; i<arr.length;i++){
        setTimeout(()=>{
            console.log("avii");
            console.log(arr[i]);
        },(i+1)*3000); //we cant write only 3000 here,bcz again for loop will run while waiting for first command
    }
}
let arr=[4,5,7,8,9];
s = display_array(arr);

