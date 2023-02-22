const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");

const jwt = require('jsonwebtoken');

const JWT_SECRET = "fjngjkdgjkdfgjk56435bjkr636()hd7u[]jg?seret4446";


app.use(cors());

app.use('/login', (req, res)=>{

    res.send({
        token: 'test123'
    });
});

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/employeeLeaves", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((e)=> console.log(e));

    
require("./model/userModel");
const User = mongoose.model("users");

app.post("/register", async(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log("user:"+username);
    console.log("pass:"+password);

    try{
        const oldUser = await User.findOne({username});

        if(oldUser) {
            return res.json({error: "User Exists"});
        }

        await User.create({
            username,
            password
        });
        console.log("user created");
   
        res.send({status: "ok"});
    }
    catch (error){
        res.send({status: "error"})
    }
});

app.post("/login-user", async(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    try{
        const user = await User.findOne({username});

        if(!user) {
            return res.json({error: "User not found"});
        }
        const token = jwt.sign({username: user.username}, JWT_SECRET);

        if(res.status(201))
        {
            console.log("token:"+ token);
            return res.json({status: "ok", data: token });
            log
        }else {
            res.json({error: "error"})
        }
      
    }
    catch (error){
        res.send({status: "error"})
    }
});

app.post("/addLeave", async(req, res)=>{

    const {token} = req.body;

    console.log("req:"+ req.body.leaveDate);
    const username = req.body.username;
    const text = req.body.text;
    const leaveDate = req.body.leaveDate;
    try{
        // const user = jwt.verify(token, JWT_SECRET);
        // console.log('user=', user);
        // console.log('token=', token);
        await User.create({
            username,
            text,
            leaveDate
        });
        res.send({status: "ok"});
    }
    catch (error){
        res.send({status: "error"})
    }
});


app.listen(8080, ()=>{
    console.log("API is running on port 8080 ");
})