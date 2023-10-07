import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Jurusan from "./JurusanModel.js";
import Mapel from "./MapelModel.js";
 
const { DataTypes } = Sequelize;
 
const Guru = db.define('guru',{
    NIP:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    Nama_Lengkap: DataTypes.STRING,
    Tempat_Lahir: DataTypes.STRING,
    Tanggal_Lahir: DataTypes.DATE,
    Alamat: DataTypes.STRING,
    Jenis_Kelamin: DataTypes.STRING,
    Agama: DataTypes.STRING
},{
    freezeTableName:true
});
 
Guru.belongsTo(Jurusan, { foreignKey: 'id_jurusan' });
Nilai.belongsTo(Mapel, { foreignKey: 'id_mapel' });
export default Guru;