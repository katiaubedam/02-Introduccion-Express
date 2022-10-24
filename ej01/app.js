const express = require('express')
const app = express()
let port = process.env.port || 3000


app.listen(port, err =>
    err 
    ? console.error("No se ha podido conectar")
    : console.log("Escuchando en puerto " + port)
)

app.get("/", (req, res)=>{
    res.send("<h1>Hola mundo</h1><br/><h2>desde Express!!</h2>")
})