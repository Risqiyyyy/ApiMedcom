import express from "express";
import {
        getMapel , 
        getMapelById ,
        createMapel ,
        updateMapel,
        deleteMapel
} from "../controllers/Mapel.js";

const router = express.Router();

router.get('/getMapel', getMapel);
router.post('/CreateMapel', createMapel);
router.get('/getMapelById/:id', getMapelById);
router.patch('/updateMapel/:id', updateMapel);
router.delete('/deleteMapel/:id', deleteMapel);

export default router;