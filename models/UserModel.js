import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Siswa from "./SiswaModel.js";
import Guru from "./GuruModel.js";

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

Users.belongsTo(Siswa, { foreignKey: 'NIS' });
Users.belongsTo(Guru, { foreignKey: 'NIP' });

export default Users;