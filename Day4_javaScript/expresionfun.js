const msg=function message(){
    console.log=("welcome to expression function")
};
msg();

const sum=function(num1, num2){
    let sum=num1+num2;
    console.log("sum=",sum);
}
sum(10,20);

const mul=function(num1,num2){
    return num1*num2;
};
console.log("multiply=",mul(3,5));