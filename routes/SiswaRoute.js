import express from "express";
import {
        getSiswa , 
        getSiswaById ,
        createSiswa ,
        updateSiswa,
        deleteSiswa
} from "../controllers/Siswa.js";

const router = express.Router();

router.get('/getSiswa', getSiswa);
router.post('/Createsiswa', createSiswa);
router.get('/getSiswaById/:id', getSiswaById);
router.patch('/updateSiswa/:id', updateSiswa);
router.delete('/deleteSiswa/:id', deleteSiswa);

export default router;