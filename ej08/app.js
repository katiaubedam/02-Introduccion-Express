const express = require('express')
const app = express()
let port = process.env.port || 3000

let array = require("./modules/array")
let aleatorio = require("./modules/funcion")

app.get("/", (req, res) => {
    let rnd = aleatorio()
    array[rnd]++

    res.send(array)
})

app.get("/borrar/:indice", (req, res) => {
    let i = req.params.indice
    if (i >= 0 && i <= 9) {
        array[i] = 0
        res.send(array)
    } else {
        res.send("Introduce un índice válido, anda")
    }
})

app.listen(port, err =>
    err 
    ? console.error("No se ha podido conectar")
    : console.log("Escuchando en puerto " + port)
)