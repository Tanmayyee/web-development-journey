import express from "express"
const app= express();
import path from 'path'

app.set('view engine','ejs')

app.set('views',path.join(import.meta.dirname,'/views'))

app.get('/random',(req,res)=>{
    const num=Math.floor(Math.random()*10+1);
    res.render('condition',{num})
})

app.listen(1000,()=>{
    console.log("listning from port:1000")
})