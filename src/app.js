import express from 'express'
import routerActor from "./routers/actor/actor.js"
import routerUser from './routers/user/user.js'
import cors from "cors";

const app = express()

app.use(cors());

app.use(express.json())
app.use(routerActor)
app.use(routerUser)

export default app