// rest parameter
// const sum=(num1,num2)=>{
//     console.log("sum of numbers",(num1+num2));
// }
// sum(3,4);
const sum=(num1,num2,...numbers)=>{
    let s=0;
    if(numbers.length>0){
        s=numbers.reduce((a,b)=>a+b)
    }
    console.log("sum of numbers",(num1+num2+s));
}
sum(3,4,6,7,8);