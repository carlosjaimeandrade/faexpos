import Movie from "../../model/movies/Movies.js";

const createByList = async (movies, actorId) => {
    const response = {
        success: [],
        error: []
    }

    for (const movie of movies) {
        const movieCreate = await Movie.create({
            name: movie,
            actorId
        })

        if (!movieCreate) {
            response.error.push(movie)
            continue
        }

        response.success.push(movie)
    }

    return response
}

export default createByList