const msg=()=>console.log("Arrow function")
let data=[10,20,30,40,50,"kiet",msg];
console.log(data);
data[6]();

// for(let i=0;i<data.length;i++){
//     console.log(`value of ${i} is ${data[i]}`);
// }


// for in
// for(let index in data){
//     console.log(`value of ${index} is ${data[index]}`);
// }


// for value
// for(let value of data){
//     console.log(`value of array=${value}`);
// }


//faster than other for because using hashing method
// data.forEach(value=>console.log(`value of array=${value}`));
let length=data.length;
console.log(length)

let index=data[0]
console.log(index)

let last=data[data.length-1];
console.log(last);


data.push(56);
console.log(data);




