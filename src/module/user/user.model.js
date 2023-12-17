import { DataTypes } from "sequelize";
import { sequelize } from '../../config/database/database.js'

const User = sequelize.define('services', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },

    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    account: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }

})

export default User;