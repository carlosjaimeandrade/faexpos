import sequelize from "../config/database.js";
import Actor from "./actor/actor.js";

sequelize.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("Todas as tabelas foram sincronizadas com sucesso.");
})

export default {
    Actor
}