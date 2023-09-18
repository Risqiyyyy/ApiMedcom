import Guru from "../models/GuruModel.js";

export const getGuru = async(req, res) =>{
    try {
        const response = await Guru.findAll();
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    };
};

export const getGuruById = async(req, res) =>{
    try {
        const response = await Siswa.findOne({
            where: {
                NIP: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createGuru = async(req, res) =>{
    const { NIP, Nama_Lengkap ,Tempat_Lahir,Tanggal_Lahir,Alamat,Jenis_Kelamin,Agama
    } = req.body;
    try {
        await Siswa.create({
            NIP: NIP,
            Nama_Lengkap: Nama_Lengkap,
            Tempat_Lahir: Tempat_Lahir,
            Tanggal_Lahir: Tanggal_Lahir,
            Alamat: Alamat,
            Jenis_Kelamin: Jenis_Kelamin,
            Agama: Agama
        });
        res.status(201).json({msg: "Data Guru Berhasil Ditambahkan"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    };
};

export const updateGuru = async(req, res) =>{
    const guru = await Guru.findOne({
        where: {
            NIS: req.params.id
        }
    });
    if(!guru) return res.status(404).json({msg: "Guru tidak ditemukan"});
    const { NIP, Nama_Lengkap ,Tempat_Lahir,Tanggal_Lahir,Alamat,Jenis_Kelamin,Agama
    } = req.body;
    try {
        await Guru.update({
            NIP: NIP,
            Nama_Lengkap: Nama_Lengkap,
            Tempat_Lahir: Tempat_Lahir,
            Tanggal_Lahir: Tanggal_Lahir,
            Alamat: Alamat,
            Jenis_Kelamin: Jenis_Kelamin,
            Tempat_Lahir: Tempat_Lahir,
            Agama: Agama
        },{
            where:{
                NIP: guru.NIP
            }
        });
        res.status(200).json({msg: "Guru Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    };
};

export const deleteGuru = async(req, res) =>{
    const guru = await Guru.findOne({
        where: {
            NIS: req.params.id
        }
    });
    if(!guru) return res.status(404).json({msg: "Guru tidak ditemukan"});
    try {
        await Guru.destroy({
            where:{
                NIS: guru.NIS
            }
        });
        res.status(200).json({msg: "Guru Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}