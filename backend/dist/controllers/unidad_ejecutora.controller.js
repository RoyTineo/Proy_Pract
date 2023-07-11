"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUnidadEjecutora = exports.postUnidadEjecutora = exports.deleteUnidadEjecutora = exports.getUnidadEjecutora = exports.getUnidadesEjecutoras = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getUnidadesEjecutoras = (req, res) => {
    connection_1.default.query("SELECT * FROM tb_unidad_ejecutora", (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getUnidadesEjecutoras = getUnidadesEjecutoras;
const getUnidadEjecutora = (req, res) => {
    const { id } = req.params;
    connection_1.default.query("SELECT * FROM tb_unidad_ejecutora WHERE id_unidad_ejecutora = ?", id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getUnidadEjecutora = getUnidadEjecutora;
const deleteUnidadEjecutora = (req, res) => {
    const { id } = req.params;
    connection_1.default.query("DELETE FROM tb_unidad_ejecutora WHERE id_unidad_ejecutora = ?", id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Unidad eliminada con exito'
        });
    });
};
exports.deleteUnidadEjecutora = deleteUnidadEjecutora;
const postUnidadEjecutora = (req, res) => {
    const { body } = req;
    connection_1.default.query("INSERT INTO tb_unidad_ejecutora SET ?", [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Unidad agregada con exito",
        });
    });
};
exports.postUnidadEjecutora = postUnidadEjecutora;
const putUnidadEjecutora = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query("UPDATE tb_unidad_ejecutora SET ? WHERE id_unidad_ejecutora = ?", [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Unidad actualizada con exito",
        });
    });
};
exports.putUnidadEjecutora = putUnidadEjecutora;
