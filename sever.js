// const http = require("node:http");

// const server = http.createServer((req , res) => {
//    res.setHeader("Content-Type", "text/plain; charset=utf-8");

//   if (req.url === "/") {
//     res.statusCode = 200;
//     res.end("Hello this is my home page!");
//     return;
//   }

//   if (req.url === "/about") {
//     res.statusCode = 200;
//     res.end("HELLO This Is My About Page");
//     return;
//   }

//   if (req.url === "/contact") {
//     res.statusCode = 200;
//     res.end("HELLO This Is My Contact Page");
//     return;
//   }

//   res.statusCode = 404;
//   res.end("404 - Ye page nahi mila.");
// })

// server.listen(3000 , "127.0.0.1", ( ) => {
//     console.log("sever listen ho gya");
    
// })


const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello this is my home page!");
});

app.get("/about", (req, res) => {
  res.send("HELLO This Is My About Page");
});

app.get("/contact", (req, res) => {
  res.send("HELLO This Is My Contact Page");
});

app.put("/edit-user", (req, res) => {
    console.log("request -->",req.body);
     res.status(200)
    send("updated user successfully!")
    
})

app.delete("/delete-user", (req, res) => {

    res.status(200)
    send("delete user successfully!")
    
})

app.post("/signup", (req, res) => {
    console.log("request -->",req.body);

    res.status(200)
    send("signup req successfully hit")
    
})

app.listen(3000, () => {
  console.log("Express server: http://127.0.0.1:3000");
});