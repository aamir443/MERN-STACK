// const sumButton=document.getElementById("sum");
// sumButton.addEventListener("click",()=>{
//     let num1=prompt("ENTER NUMBER 1","0");
//     let num2=prompt("ENTER NUMBER 2","0");
//     let result=`sum of (${num1}, ${num2}) is = ${perseInt(num1)+perseInt(num2)}`;
//     document.getElementById("result").innerHTML=result;
// });
// const sumButton=document.getElementById("sum");
// sumButton.addEventListener("click",()=>{
//     const oldData=document.getElementById("result").innerHTML;
//     document.getElementById("result").innerHTML=oldData+(2+2);
    
// });
const sumButton=document.getElementById("sum");
sumButton.addEventListener("click",()=>{
     let num1=prompt("Enter number 1","0");
     let num2=prompt("Enter number 2","0");
     let result=`Sum of (${num1}, ${num2}) is = ${parseInt(num1)+parseInt(num2)}`;
     document.getElementById("result").innerHTML=result;
});