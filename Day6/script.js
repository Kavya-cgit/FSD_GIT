 let ar=[1,2,3,44,55]
// let array=ar.map((x)=>x*2);
// console.log(array);
// let newarr=ar.filter((x)=>x%2==0).map((x)=>3*x);
// console.log(newarr);
let newarr=ar.reduce((x,y)=>x+y,0);
console.log(newarr)
const students = [
    {
        Name: "Kunal",
        Score: 60
    },
    {
        Name: "Pandey",
        Score: 20
    },
    {
        Name: "Kavya",
        Score: 100
    }
]

newst = students.filter((x)=> x.Score>50)

console.log(newst)

let sum=students
      .filter((student)=>student.Score>60)
      .map((student)=>student.Score*2)
      .reduce((x,y)=>x+y,0)
console.log(sum)