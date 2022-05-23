const express = require("express") 

const port = 9090

const app = express()

//  creating routes

app.get("/", (req, res) => {
  res.send("Hello there") 
})

app.get("/api/main", (req, res) => {
  res.write("<h1>Express.Js</h1>")
  res.write(
    `<li>Makes Node.js web application development fast and easy.</li>
    <li>Easy to configure and customize.</li>
   <li> Allows you to define routes of your application based on HTTP methods and URLs.</li>
   <li>Includes various middleware modules which you can use to perform additional tasks on request and response.</li>
   <li>Easy to integrate with different template engines like Jade, Vash, EJS etc.</li>
   <li>Allows you to define an error handling middleware.</li>
   <li>Easy to serve static files and resources of your application.</li>
   <li>Allows you to create REST API server.</li>
   <li>Easy to connect with databases such as MongoDB, Redis, MySQL</li>`
  )
  res.end()
})

app.listen(port)