const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");
const app = express();


const server = http.createServer(
//   (req, res) => {

//  const path = url.parse(req.url).pathname;

//  switch (path) {
//   case '/':
//    showData("index.html",res)
//    break;
//    case'/user':
//    showData("user.html",res)
//    break;
//    default:res.end("this page not Found")
//  }
// }

app.use((req,res)=>{
  res.json({
    username:"Ahmed",
    message:"Hello Hero"
  })
})

);

server.listen(3000, "127.0.0.1", () => { console.log("Server running....") })

// function showData(readData,res){
//  fs.readFile(readData, { encoding: "utf-8" }, (error, data) => { error ? res.end(error) : res.end(data) })
// }