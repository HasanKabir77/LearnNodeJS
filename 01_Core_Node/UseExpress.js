const express = require('express');
const app = express();

app.get('', (req, resp)=>{
    // console.log("Data Sent from Browser : ==>>>", req.query.name);
    // resp.send(`<h1>Hello. Welcome to my Portfolio, this is Home Page ${req.query.name}</h1>`)
    resp.send(`<h1>Hello. Welcome to my Portfolio, this is Home Page</h1> <a href = "/about">About-Us</a>`)
})


app.get('/about', (req, resp)=>{
    resp.send(`
    <input type = "text" placeholder = "User Name" value = "${req.query.name}"/> <br>
    <input type = "password" placeholder = "Password"/> <br>
    <button>Hit the Button</button> <br>
    <a href = "/">Home</a>
    `)
})

app.get('/Help', (req, resp)=>{
    // resp.send('<h2>Hello, this is Help & Support Page</h2>')
    resp.send([
    {
        name: "Hasan Kabir",
        Phone: "01878734120",
        email: "hasankabir0720@gmail.com"
    },
    {
        name: "Kabir Hasan",
        Phone: "01978734120",
        email: "hasankobir243@gmail.com"
    }
])
})
app.listen(4500);