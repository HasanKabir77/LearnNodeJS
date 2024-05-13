const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'file')
console.log('Here are File Path.', dirPath);

// for(i = 0; i < 5; i++)
// {
//     fs.writeFileSync("hello"+i+'.txt','Here are some code or Text.\nLets Enjoy.')
//     // fs.writeFileSync(dirPath+`/hello${i}.txt`,'Here are some code or Text.\nLets Enjoy.')
// }

fs.readdir(dirPath, (err, file)=>{
    file.forEach((item)=>{
        console.log("File Name is : ",item);
    })
})