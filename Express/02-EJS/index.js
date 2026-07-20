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

app.listen(2000, () => {
  console.log("listning on port 2000");
});
