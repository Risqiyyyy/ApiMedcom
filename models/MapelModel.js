import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Mapel = db.define('mapel',{
    id_mapel:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    Nama_Mapel: DataTypes.STRING
},{
    freezeTableName:true
});
 
export default Mapel;