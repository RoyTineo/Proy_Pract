"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const unidad_ejecutora_controller_1 = require("../controllers/unidad_ejecutora.controller");
const unidad_ejecutora_controller_2 = require("../controllers/unidad_ejecutora.controller");
const router = (0, express_1.Router)();
router.get('/', unidad_ejecutora_controller_1.getUnidadesEjecutoras);
router.get('/:id', unidad_ejecutora_controller_2.getUnidadEjecutora);
router.delete('/:id', unidad_ejecutora_controller_1.deleteUnidadEjecutora);
router.post('/', unidad_ejecutora_controller_1.postUnidadEjecutora);
router.put('/:id', unidad_ejecutora_controller_1.putUnidadEjecutora);
exports.default = router;
