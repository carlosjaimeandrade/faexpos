import express from 'express'

const routerActor = express.Router()

routerActor.get("/actor", function(req, res) {
    res.json({
        message: "ok"
    })
})

routerActor.get("/actors", function(req, res) {
    res.json({
        message: "ok"
    })
})

export default routerActor