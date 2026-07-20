import express from "express";
const app = express();

app.set('view engine','ejs')

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(2000, () => {
  console.log("listning on port 2000");
});
