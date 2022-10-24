const express = require('express')
const app = express()
let port = process.env.port || 3000

let nombres = ["Max", "Chloe", "Rachel", "Kate", "Victoria"]

app.listen(port, err =>
    err 
    ? console.error("No se ha podido conectar")
    : console.log("Escuchando en puerto " + port)
)

app.get("/persona", (req, res) => {
    let html = ""
    nombres.forEach((persona, i) => {
        html += `<li>${persona}</li>`
    })
    res.send(`<ul>${html}</ul>`)
})

app.get("/persona/:nombre", (req, res) => {
    let resText = "Nombre no encontrado"

    for(let i = 0; i < nombres.length; i++){
        if (nombres[i] === req.params.nombre) {
            resText = nombres[i]
            break
        }
    }

    res.send(resText)
})