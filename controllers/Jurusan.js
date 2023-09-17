import Jurusan from "../models/JurusanModel.js";

export const getJurusan = async(req, res) =>{
    try {
        const response = await Jurusan.findAll();
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getJurusanById = async(req, res) =>{
    try {
        const response = await Jurusan.findOne({
            where: {
                id_jurusan: req.params.id
            }
        });
        if(!response) return res.status(404).json({msg: "Data tidak ditemukan"});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
   
}

export const createJurusan = async(req, res) =>{
    const { Nama_Jurusan, Tingkatan, id_mapel
    } = req.body;
    try {
        await Jurusan.create({
            Nama_Jurusan: Nama_Jurusan,
            Tingkatan: Tingkatan,
            id_mapel: id_mapel
        });
        res.status(201).json({msg: "Data Jurusan Berhasil Ditambahkan"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateJurusan = async(req, res) =>{
    const jurusan = await Jurusan.findOne({
        where: {
            NIS: req.params.id
        }
    });
    if(!jurusan) return res.status(404).json({msg: "Jurusan tidak ditemukan"});
    const { Nama_Jurusan, Tingkatan, id_mapel
    } = req.body;
    try {
        await Jurusan.create({
            Nama_Jurusan: Nama_Jurusan,
            Tingkatan: Tingkatan,
            id_mapel: id_mapel
        },{
            where:{
                id_jurusan: jurusan.id_jurusan
            }
        });
        res.status(200).json({msg: "Jurusan Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    };
   
}

export const deleteJurusan = async(req, res) =>{
    try {
        const jurusan = await Jurusan.findOne({
            where:{
                id_jurusan: req.params.id
            }
        });
        if(!jurusan) return res.status(404).json({msg: "Data tidak ditemukan"});
            await Jurusan.destroy({
                where:{
                    id_jurusan: jurusan.id_jurusan
                }
            });
        res.status(200).json({msg: "Jurusan deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}