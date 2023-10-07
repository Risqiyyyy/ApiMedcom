import Siswa from "../models/SiswaModel.js";
import argon2 from "argon2";

export const getSiswa = async(req, res) =>{
    try {
        const response = await Siswa.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getSiswaById = async(req, res) =>{
    try {
        const response = await Siswa.findOne({
            where: {
                NIS: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createSiswa = async(req, res) =>{
    const { NIS, Nama_Lengkap ,Tempat_Lahir,Tanggal_Lahir,Alamat,Jenis_Kelamin,Agama
    } = req.body;
    try {
        await Siswa.create({
            NIS: NIS,
            Nama_Lengkap: Nama_Lengkap,
            Tempat_Lahir: Tempat_Lahir,
            Tanggal_Lahir: Tanggal_Lahir,
            Alamat: Alamat,
            Jenis_Kelamin: Jenis_Kelamin,
            Agama: Agama
        });
        res.status(201).json({msg: "Data Siswa Berhasil Ditambahkan"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateSiswa = async(req, res) =>{
    const siswa = await Siswa.findOne({
        where: {
            NIS: req.params.id
        }
    });
    if(!siswa) return res.status(404).json({msg: "User tidak ditemukan"});
    const { NIS, Nama_Lengkap ,Tempat_Lahir,Tanggal_Lahir,Alamat,Jenis_Kelamin,Agama
    } = req.body;
    try {
        await Siswa.update({
            NIS: NIS,
            Nama_Lengkap: Nama_Lengkap,
            Tempat_Lahir: Tempat_Lahir,
            Tanggal_Lahir: Tanggal_Lahir,
            Alamat: Alamat,
            Jenis_Kelamin: Jenis_Kelamin,
            Tempat_Lahir: Tempat_Lahir,
            Agama: Agama
        },{
            where:{
                NIS: user.NIS
            }
        });
        res.status(200).json({msg: "Siswa Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    };
};

export const deleteSiswa = async(req, res) =>{
    const siswa = await Siswa.findOne({
        where: {
            NIS: req.params.id
        }
    });
    if(!siswa) return res.status(404).json({msg: "Siswa tidak ditemukan"});
    try {
        await Siswa.destroy({
            where:{
                NIS: siswa.NIS
            }
        });
        res.status(200).json({msg: "Siswa Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}