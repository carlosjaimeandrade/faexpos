import Actor from "../../model/actor/actor.js"

const update = async (data, id) => {
    const qtd = await Actor.update(data, {
       where: {
        id
       } 
    })

    if (qtd == 0) {
        return false
    }

    const actor = await Actor.findByPk(id)

    return actor
}

export default update