import express from 'express'
import actorController from '../../controllers/actor/actorController.js'
import auth from '../../middleware/auth.js'

const routerActor = express.Router()

routerActor.post("/actor", auth, actorController.createActor)

routerActor.get("/actor/:id", auth, actorController.getActor)

routerActor.get("/actors", auth, actorController.getActors)

routerActor.delete("/actor/:id", auth, actorController.destroyActor)

routerActor.patch("/actor/:id", auth, actorController.updateActor)

export default routerActor