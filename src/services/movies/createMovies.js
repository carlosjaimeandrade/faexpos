import Movie from "../../model/movies/Movies.js";

const createByList = async (movies, actorId) => {
    console.log(movies)
    for (const movie of movies) {
        await Movie.create({
            name: movie,
            actorId
        })
    }
}

export default createByList