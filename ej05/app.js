const express = require('express')
const app = express()
let port = process.env.port || 3000

let objeto = {
    nombre: "",
    apellido: "",
    edad: 0
}

app.get("/", (req, res)=>{
    res.send(objeto)
})

app.get("/nombre/:nom", (req, res)=>{
    objeto.nombre = req.params.nom
    res.redirect(`http://localhost:${port}/`)
})

app.get("/apellido/:apellido", (req, res)=>{
    objeto.apellido = req.params.apellido
    res.redirect(`http://localhost:${port}/`)
})

app.get("/edad/:edad", (req, res)=>{
    objeto.edad = req.params.edad
    res.redirect(`http://localhost:${port}/`)
})

app.listen(port, err =>
    err 
    ? console.error("No se ha podido conectar")
    : console.log("Escuchando en puerto " + port)
)
