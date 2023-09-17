import express from "express";
import {
        getJurusan,
        createJurusan ,
        getJurusanById,
        updateJurusan,
        deleteJurusan
} from "../controllers/Jurusan.js";

const router = express.Router();

router.get('/getJurusan', getJurusan);
router.post('/createJurusan', createJurusan);
router.get('/getJurusanById/:id', getJurusanById);
router.patch('/updateJurusan/:id', updateJurusan);
router.delete('/deleteJurusan/:id', deleteJurusan);

export default router;