const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'index')
// console.log(publicPath);

app.use(express.static(publicPath));

app.listen(4500);
