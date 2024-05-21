
module.exports = reqFilter = (req, resp, next)=>{
    if(!req.query.age)
    {
        resp.send('Provide your Age!')
    }
    else if(req.query.age<18)
    {
        resp.send('You are Under age, You can not access this page.!')
    }
    else
    {
        next();
    }
}