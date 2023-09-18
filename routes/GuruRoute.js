import express from "express";
import {
        getGuru , 
        getGuruById ,
        createGuru ,
        updateGuru,
        deleteGuru
} from "../controllers/Guru.js";

const router = express.Router();

router.get('/getGuru', getGuru);
router.post('/CreateGuru', createGuru);
router.get('/getGuruById/:id', getGuruById);
router.patch('/updateGuru/:id', updateGuru);
router.delete('/deleteGuru/:id', deleteGuru);

export default router;