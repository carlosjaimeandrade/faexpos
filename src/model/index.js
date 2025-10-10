import sequelize from "../config/database.js";
import Actor from "./actor/actor.js";
import Movie from "./movies/Movies.js";
import User from "./user/user.js";

Actor.hasMany(Movie, {
    foreignKey: {
        name: "actorId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }
})

sequelize.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("Todas as tabelas foram sincronizadas com sucesso.");
})

export default {
    Actor
}