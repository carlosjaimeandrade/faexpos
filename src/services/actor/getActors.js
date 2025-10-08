import Actor from "../../model/actor/actor.js"

const getAll = async () => {
    const actors = await Actor.findAll()
    return actors
}

export default getAll