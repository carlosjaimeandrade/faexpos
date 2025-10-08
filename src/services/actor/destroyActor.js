import Actor from "../../model/actor/actor.js"

const destroy = async (id) => {
    const actor = await Actor.destroy({
        where: {
            id
        }
    })

    if (!actor) {
        return false
    }

    return actor
}

export default destroy