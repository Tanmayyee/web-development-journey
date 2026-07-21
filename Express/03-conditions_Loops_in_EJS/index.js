import express from "express"
const app= express();
import path from 'path'
import redditData from './data.json' with {type:'json'};

app.set('view engine','ejs')

app.set('views',path.join(import.meta.dirname,'/views'))

app.get('/random',(req,res)=>{
    const num=Math.floor(Math.random()*10+1);
    res.render('condition',{num})
})

app.get('/cats',(req,res)=>{
    const cats=['Milo','Luna','Oliver','Salem','Mochi']
    res.render('loops',{cats})

})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    const data= redditData[subreddit]
        if(data){
            res.render('subreddit',{...data})
            // console.log(data)   -- to check , working or not
        }else{
            res.render('notfound',{subreddit})
        }
})

app.listen(1000,()=>{
    console.log("listning from port:1000")
})