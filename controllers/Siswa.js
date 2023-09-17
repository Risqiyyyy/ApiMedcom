import Siswa from "../models/SiswaModel.js";
import argon2 from "argon2";

export const getSiswa = async(req, res) =>{
   
}

export const getSiswaById = async(req, res) =>{

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
   
}

export const deleteSiswa = async(req, res) =>{
}