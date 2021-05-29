const express = require('express')
const nunjucks = require('nunjucks')

const server =  express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})




// rotas
server.get("/" , function(req, res) {
    return res.render("home")
})

server.get("/sobre" , function(req, res) {
    return res.render("sobre")
})  

server.get("/receitas" , function(req, res) {
    return res.render("receitas")
})



// server
server.listen(5000, function(){
    console.log('server is running')
})