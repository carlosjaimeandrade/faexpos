import { DataTypes } from "@sequelize/core";
import sequelize from "../../config/database.js";

const Movie = sequelize.define('movie', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Movie