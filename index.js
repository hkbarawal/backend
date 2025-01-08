const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('hedotcom');
})
const githubData ={
    name:'hemant',
    age:23
}

app.get('/login',(req,res)=>{
    res.send('<h1>please login my page</h1>');
})

app.get('/github',(req,res)=>{
    res.send(githubData);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});