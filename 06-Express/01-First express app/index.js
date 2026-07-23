//first express 

import express from "express"; // Import the Express package
const app = express(); // Initialize the Express application

// Middleware: Runs automatically for every incoming request (GET, POST, etc.) since no path is specified
// app.use((req, res) => {
//     console.log("we got new request!!!");     // Prints to the terminal
//     res.send("<h1>This is my webpage</h1>");  // Sends this HTML to the browser
// });

app.get("/", (req, res) => {
  // GET request handler for http://localhost:4000/
  res.send("Welcome to the home page!!!!");
});

// WARNING: If placed here, this wildcard route blocks all routes below it because Express checks routes in order. and star(*) matches everything.
// app.get("/{*path}", (req, res,next) => {
//     res.send("I DON'T KNOW THAT PATH")
// })

app.get("/cats", (req, res) => {
  //defining route for cats
  // GET request handler for http://localhost:4000/cats
  res.send("meow");
});

app.get("/dogs", (req, res) => {
  // GET request handler for http://localhost:4000/dogs
  res.send("woof");
});

app.post("/cats", (req, res) => {
  // POST request handler for http://localhost:4000/cats
  res.send("Meow postedd yayyy!!!!");
});

//path parameters / route parameter / route variable:
app.get("/r/:subreddit", (req, res) => {
  //The colon (:) tells Express that 'subreddit' is a dynamic variable that can capture whatever the user types there (e.g., /r/cats, /r/dogs).
  const { subreddit } = req.params; // Express automatically captures dynamic route parameters and stores them inside req.params.
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postID", (req, res) => {
  const { subreddit, postID } = req.params;
  res.send(`<h1>Viewing Post ID: ${postID} on the ${subreddit} subreddit</h1>`);
});

//request query:
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched");
  } else {
    res.send(`<h1>Search results for: ${q}</h1>`);
  }
});

// Wildcard route: Matches any path not explicitly defined above (Acts as a 404 handler)
app.get("/{*path}", (req, res, next) => {
  res.send("I DON'T KNOW THAT PATH");
});

// Start Server: Listens for incoming requests on port 4000
app.listen(4000, () => {
  console.log("listening on Port 4000 , hehe!!!");
});
