import express from "express";  //comes with different in-built modules ( like path and many more)
const app = express();  
import path from "path";

//Tells Express to use EJS as the template engine to generate HTML pages.
app.set("view engine", "ejs");

//Points Express to the absolute location of your "views" folder.
//"import.meta.dirname" finds the absolute path of the folder where this script (like index.js) lives.
// app.set("views") tells Express where to look for your templates.
// path.join() safely glues the current script's folder path to the "views" folder name.
app.set("views", path.join(import.meta.dirname, "/views"));  //we can change views folder name to any name like =app.set("views", path.join(import.meta.dirname, "templates"));

app.get("/", (req, res) => {
    //Looks inside the "views" folder, finds "home.ejs", converts it to HTML, and sends it to the browser
    res.render("home");
});


///ran route: Generates a random number between 1 and 10 and passes it to the random.ejs view.
app.get('/ran',(req,res)=>{
  const num=Math.floor(Math.random()*10+1)
  res.render('random',{bubbles:num})
  //or res.render('random',{num})
})


///r/:subreddit route: Extracts the dynamic subreddit name from the URL path and passes it to the subreddit.ejs view.
app.get('/r/:subreddit',(req,res)=>{
  const {subreddit}=req.params
  res.render('subreddit',{subreddit})
})

app.listen(2000, () => {
  console.log("listning on port 2000");
});
