const express = require("express")
const cors = require("cors")

const app = express()
const port = 3000

let saveUserArr=[]

//#region 
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors())

//#endregion
// Cuando te hagan un get http://localhost:3000/transaction
app.get("/transaction", (req, res)=>{
    res.send(JSON.stringify(saveUserArr))
})

// Cuando te hagan un post http://localhost:3000/transaction
app.post("/transaction", (req, res)=>{
    let users = req.body
    saveUserArr.push(users)
    res.send(JSON.stringify("Guardado"))
    console.log(saveUserArr);
})

app.listen(port,()=>{
    console.log(`Estoy ejecutandome en http://localhost:${port}`);
})

// GET -> micomputadora/pokemones -> Devolve los pokemones.
// POST -> micomputadora/pokemones (con un pokemon) -> Guarda el pokemon.