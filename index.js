const express=require('express');
const router=require('./routers/router')
const {database}=require('./config/database')
const cookies = require('cookie-parser');

const app=express()
const path=require('path');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use("/upload/images",express.static('upload/images'))


app.set('view engine','ejs')
app.use(cookies());

app.use(router)




app.listen(8000,(err)=>{
    if(!err){
        console.log("server start http://loclhost:8000");
    }
})