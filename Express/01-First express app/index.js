import express from "express"; // Import the Express package
const app = express();         // Initialize the Express application

// Middleware: Runs automatically for every incoming request (GET, POST, etc.) since no path is specified
// app.use((req, res) => {
//     console.log("we got new request!!!");     // Prints to the terminal
//     res.send("<h1>This is my webpage</h1>");  // Sends this HTML to the browser
// });

app.get("/", (req, res) => {
  // GET request handler for http://localhost:9000/
  res.send("Welcome to the home page!");
});

// WARNING: If placed here, this wildcard route blocks all routes below it because Express checks routes in order. and star(*) matches everything.
// app.get('*', (req, res) => { 
//     res.send("I DON'T KNOW THAT PATH")
// })

app.get("/cats", (req, res) => {                                //defining route for cats 
  // GET request handler for http://localhost:9000/cats
  res.send("meow");
});

app.get("/dogs", (req, res) => {
  // GET request handler for http://localhost:9000/dogs
  res.send("woof");
});

app.post("/cats", (req, res) => {
  // POST request handler for http://localhost:9000/cats
  res.send("Meow postedd yayyy!!!!");
});

// Wildcard route: Matches any path not explicitly defined above (Acts as a 404 handler)
app.get('*', (req, res) => { 
    res.send("I DON'T KNOW THAT PATH")
})

// Start Server: Listens for incoming requests on port 9000
app.listen(9000, () => {
  console.log("listening on Port 9000 , hehe!!!");
});