// sayhello=()=>{
//     console.log("Hello Function")
// };
// console.log("start")
// setTimeout(sayhello,4000);
// console.log("End");

// console.log("Start")
// setTimeout(()=>{
//     console.log("First task completed");
//     setTimeout(()=>{
//         console.log("Second task completed");
//         setTimeout(()=>{
//             console.log("Third task completed");
//         },3000);
//     },2000);
// },1000);           
// console.log("End")

// const myPromise=new Promise((resolve,reject)=>{
//    let success=true;
//    if(success){
//     resolve("Data send successs");
//    }
//    else{
//     reject("Data Failed to send");
//    }

// });
// myPromise
//    .then((message)=>console.log(message))
//    .catch((error)=>console.log("Error fetching data"+error))


function task(message,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
});
}
task("first task completed",1000)
.then(()=>("second task completed"),2000)
.then(()=>("third task completed"),3000)