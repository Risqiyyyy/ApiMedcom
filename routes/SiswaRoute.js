import express from "express";
import {getSiswa , 
        getSiswaById ,
        createSiswa ,
        updateSiswa,
        deleteSiswa
} from "../controllers/Siswa.js";

const router = express.Router();

// router.get('/me', Me);
router.post('/Createsiswa', createSiswa);
// router.post('/register', Register);
// router.delete('/logout', logOut);

export default router;