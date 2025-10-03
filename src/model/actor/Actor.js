import { DataTypes } from "@sequelize/core";
import sequelize from "../../config/database.js";

const Actor = sequelize.define('actor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uf: {
        type: DataTypes.STRING(2),
        allowNull: false
    }
})

export default Actor