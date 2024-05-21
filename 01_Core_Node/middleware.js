const express = require('express');
const reqFilter = require('./middlewareRoute')
const app = express();

const route = express.Router();
route.use(reqFilter);

// this middleware use for all route // this is  app level middleware

// const reqFilter = (req, resp, next)=>{
//     if(!req.query.age)
//     {
//         resp.send('Provide your Age!')
//     }
//     else if(req.query.age<18)
//     {
//         resp.send('You are Under age, You can not access this page.!')
//     }
//     else
//     {
//         next();
//     }
// }

// app.use(reqFilter);

app.get('/', (req, resp)=>{
    resp.send('<h1>Welcome to our Website.!</h1>')
})

app.get('/user', (req, resp)=>{
    resp.send('<h1>Welcome to User Page.!</h1>')
})

route.get('/about', (req, resp)=>{
    resp.send('<h1>Welcome to About Page.!</h1>')
})

route.get('/contact', (req, resp)=>{
    resp.send('<h1>Welcome to Contact Page.!</h1>')
})

app.use('/', route);
app.listen(4500);