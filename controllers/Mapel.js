import Mapel from "../models/MapelModel.js";

export const getMapel = async(req, res) =>{
    try {
        const response = await Mapel.findAll();
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    };
};

export const getMapelById = async(req, res) =>{
    try {
        const response = await Mapel.findOne({
            where: {
                id_mapel: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createMapel = async(req, res) =>{
    const { Nama_Mapel } = req.body;
    try {
        await Mapel.create({
            Nama_Mapel: Nama_Mapel
        });
        res.status(201).json({msg: "Data Mapel Berhasil Ditambahkan"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    };
}

export const updateMapel = async(req, res) =>{
    const siswa = await Mapel.findOne({
        where: {
            id_mapel: req.params.id
        }
    });
    if(!siswa) return res.status(404).json({msg: "User tidak ditemukan"});
    const { Nama_Mapel } = req.body;
    try {
        await Mapel.create({
            Nama_Mapel: Nama_Mapel
        },{
            where:{
                id_mapel: siswa.NIS
            }
        });
        res.status(200).json({msg: "Mapel Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    };
}

export const deleteMapel = async(req, res) =>{
    const mapel = await Mapel.findOne({
        where: {
            id_mapel: req.params.id
        }
    });
    if(!mapel) return res.status(404).json({msg: "Mapel tidak ditemukan"});
    try {
        await User.destroy({
            where:{
                id_mapel: Mapel.id_mapel
            }
        });
        res.status(200).json({msg: "Mapel Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}