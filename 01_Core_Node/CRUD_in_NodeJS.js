const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'Text');

const filePath = `${dirPath}.txt`;

// Create
// fs.writeFileSync(`${filePath}`, 'This is a simple Text File')

// console.log("------->", filePath);

// Read
// fs.readFile(filePath, 'utf8',(err, item)=>{
//     console.log(item);
// })

// Update
// fs.appendFile(filePath, ' and file Name is Text.txt', (err)=>{
//     if(!err) console.log('File is Updated.!');
//     else
//     console.log(err);
// })

// Rename
// fs.rename(filePath, `${dirPath}Renamed.txt`, (err)=>{
//     if(!err) console.log('File Rename is Success.!');
// })

// Delete
// fs.unlinkSync(`${dirPath}NewText.txt`)