const express = require("express");
const app     = express();
const port    = process.env.PORT || 3000;

const studentRouter = require('./routes/students')

app.use(express.json());

app.get('/' , (req, res)=>{
    res.send("Node Js DEMO");
});

app.use('/students', studentRouter)

app.listen(port, console.log('server Running'));