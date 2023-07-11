import { Router } from "express";
import { deleteUnidadEjecutora, getUnidadesEjecutoras, postUnidadEjecutora, putUnidadEjecutora } from "../controllers/unidad_ejecutora.controller";
import { getUnidadEjecutora } from "../controllers/unidad_ejecutora.controller";

const router = Router();

router.get('/',getUnidadesEjecutoras)
router.get('/:id',getUnidadEjecutora)
router.delete('/:id',deleteUnidadEjecutora)
router.post('/',postUnidadEjecutora)
router.put('/:id',putUnidadEjecutora)


export default router