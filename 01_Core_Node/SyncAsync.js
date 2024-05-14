// console.log("Start Excute....");

let a = 10;
let b = 0;



// console.log("Complete Excute....");
// console.log(a+b);

let wiatData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // console.log("Logic Excute....");
        // b = 15;
    // console.log("2-Sec. After Excute : ",a+b);
    resolve(15);
    },2000)
})

wiatData.then((data)=>{
    b = data;
    console.log(a+b);
})