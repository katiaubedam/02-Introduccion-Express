const express = require('express')
const app = express()
let port = process.env.port || 3000


app.listen(port, err =>
    err 
    ? console.error("No se ha podido conectar")
    : console.log("Escuchando en puerto " + port)
)

app.get("/random/:num", (req, res)=>{
    let rnd = parseInt(req.params.num)
    let rndFinal = Math.floor(Math.random() * (rnd - 1) + 1)

    res.send(`Número aleatorio: ${rndFinal}`)
})