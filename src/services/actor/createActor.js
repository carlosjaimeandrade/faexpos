import Model from "../../model/index.js"

const createActor = async (actor) => {
    try {
        const create = await Model.Actor.create({
            name: actor.name,
            uf: actor.uf,
            city: actor.city
        })  

        if (!create) {
            return false;
        }

        return create
    } catch (error) {
        return false
    }
}

export default createActor

