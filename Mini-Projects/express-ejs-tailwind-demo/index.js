import express from "express"
const app= express();
import path from 'path'
import redditData from './data.json' with {type:'json'};

app.set('view engine','ejs')

app.set('views',path.join(import.meta.dirname,'/views'))

app.use(express.static(path.join(import.meta.dirname, 'public')))

app.get("/", (req, res) => {
    //Looks inside the "views" folder, finds "home.ejs", converts it to HTML, and sends it to the browser
    res.render("home");
});

app.get('/random',(req,res)=>{
    const num=Math.floor(Math.random()*10+1);
    res.render('random',{num})
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

app.listen(1300,()=>{
    console.log("listning from port:1300")
})