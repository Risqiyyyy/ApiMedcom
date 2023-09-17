import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Nilai = db.define('nilai',{
    id_nilai:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    Tahun_Ajar: DataTypes.STRING,
    Semester: DataTypes.DOUBLE,
    Nilai_Ulangan1: DataTypes.DOUBLE,
    Nilai_Ulangan2: DataTypes.DOUBLE,
    Nilai_Ulangan3: DataTypes.DOUBLE,
    Nilai_Ulangan4: DataTypes.DOUBLE,
    Nilai_Ulangan5: DataTypes.DOUBLE,
    Nilai_UTS: DataTypes.DOUBLE,
    Nilai_UAS: DataTypes.DOUBLE,
    Nilai_Akhir: DataTypes.DOUBLE,
    },{
        freezeTableName:true
    });
 
export default Nilai;