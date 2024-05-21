const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'HTML')

app.set('view engine', 'ejs');
// console.log(publicPath);

// app.use(express.static(publicPath));

app.get('', (_, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (_, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
// Video 23, 24 ----------------------
app.get('/profile', (_, resp)=>{
    const user = {
        name: 'Hasan Kabir',
        email: 'hasankabir0720@gmail.com',
        city: 'Nangolkot, Cumilla',
        password: '123654',
        skill: ['C#', 'JS', 'SQL']
    }
    resp.render('profile', {user})
})


app.get('/login', (_, resp)=>{
    resp.render('login')
})
//  ---------------------- 23, 24 End ----------------------
app.get('*', (_, resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
})

app.listen(4500);
