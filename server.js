const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')

const server = express()

server.set('port', process.env.PORT || 3030)

server.use(express.static('public'))

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.get("/product", (req, res) => {
  res.sendFile(__dirname + "/public/html/product.html")
})
server.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/html/contact.html")
})
server.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html")
})
server.get("/product-category", (req, res) => {
  res.sendFile(__dirname + "/public/html/product-category.html")
})
server.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/public/html/blog.html")
})
server.get("/post", (req, res) => {
  res.sendFile(__dirname + "/public/html/blog-post.html")
})

server.get("/cart", (req, res) => {
  res.sendFile(__dirname + "/public/html/cart.html")
})

server.get("/product-detail", (req, res) => {
  res.sendFile(__dirname + "/public/html/product-detail.html")
})
server.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/html/login.html")
})
server.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/html/register.html")
})

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html")
})

server.listen(server.get('port'), (req, res) => {
  console.log("Server is running on port %s...", server.get('port'));
})