import express from 'express'
import routerActor from "./routers/actor/actor.js"

const app = express()

app.use(express.json())
app.use(routerActor)

export default app