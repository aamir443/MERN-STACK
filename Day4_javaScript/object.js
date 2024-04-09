let studentInfo={
    rollNo:1,
    name:"Mohammad Aamir",
    course:"MCA" ,
    college:"kiet",
    marks:[2,3,4,5],
    music:()=>console.log("play music"),
}
let arrayvalue=[studentInfo,studentInfo,studentInfo];
arrayvalue.forEach(item=>console.log(item.name));
console.log(studentInfo);
console.log(studentInfo.music);
console.log(studentInfo.marks);