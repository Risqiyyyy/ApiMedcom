import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Jurusan = db.define('jurusan',{
    id_jurusan:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    Nama_Jurusan: DataTypes.STRING,
    Tingkatan: DataTypes.STRING
},{
    freezeTableName:true
});

 
export default Jurusan;