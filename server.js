const express = require("express");

const app = express();
const cors = require('cors');
const User = require("./models/User");
const { where } = require("sequelize");

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>res.send("working sever"));

app.post("/user",async(req,res)=>{
    const user = await User.create(req.body);
    res.json({user})
})
app.get('/user', async(req,res)=>{
    const user = await User.findAll(req.body)
    res.json({user})
})

app.get('/user/:id',async(req,res)=>{
    const user = await User.findOne({where:{id:req.params.id}})
    res.json(user)
})

app.put('/user/:id',async(req,res)=>{
    await User.update(req.body,{where :{id:req.params.id}})
    const user =await User.findOne({where:{id:req.params.id}})
    res.json(user)
})

app.delete('/user/:id',async(req,res)=>{
    await User.destroy({where:{id:req.params?.id}})
    res.json({message:"deleted"})
})


app.listen(1000,()=>{
    console.log('server is running...');
})