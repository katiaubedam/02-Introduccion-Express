const express = require('express')
const app = express()
let port = process.env.port || 3000

let alumnos = ["Katia", "Vanesa" ,"Manuel", "Vir", "Sandra"]

app.get("/add/:nombre", (req, res)=>{
    alumnos.push(req.params.nombre)
    res.send(alumnos)
})

app.listen(port, err =>
    err 
    ? console.error("No se ha podido conectar")
    : console.log("Escuchando en puerto " + port)
)
