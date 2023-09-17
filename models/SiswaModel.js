import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Jurusan from "./JurusanModel.js";
import Nilai from "./NilaiModel.js";
 
const { DataTypes } = Sequelize;
 
const Siswa = db.define('siswa',{
    NIS:{
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

Siswa.belongsTo(Jurusan, { foreignKey: 'id_jurusan' });
Siswa.belongsTo(Nilai, { foreignKey: 'id_nilai' });
 
export default Siswa;