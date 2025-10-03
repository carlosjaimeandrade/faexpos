import express from 'express'
import actorController from '../../controllers/actor/actorController.js'

const routerActor = express.Router()

routerActor.post("/actor", actorController.createActor)

routerActor.get("/actor/:id", actorController.getActor)

routerActor.get("/actors", actorController.getActors)

export default routerActor