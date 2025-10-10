import Actor from "../../model/actor/actor.js"
import Movie from "../../model/movies/Movies.js"    

const getAll = async () => {
    const actors = await Actor.findAll({
        include: Movie
    })
    return actors
}

export default getAll