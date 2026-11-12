const fs = require("fs")
const http = require ("http")
const url = require("url")


// const content = "My Name Is Abdul Wahid"

// fs.writeFile('output.txt' , content , "utf8"  ,(err) => {
//     if (err) {
//         console.log("error write file :", err);
//         return
//     }
//     console.log("file Writen SuccessFully");
    
// })

// fs.readFile("./server.txt" ,"utf8", (err  , data ) => {
//     if (err) {
//         console.log("Error Reading File:" , err);
//         return
//     }
//     console.log(data);
    
// })

const server = http.createServer((req, res) =>{
    res.end("hello , world!")
    if (req.url == "post") {
        res.end("THIS IS MY POST")
    }
    else{
        res.end("Hello server");
        
    }
})

server.listen(3000,"127.0.0.1",()=>{
    console.log("server is running local host challa local host 3000");
    
})

