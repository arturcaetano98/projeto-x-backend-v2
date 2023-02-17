import express from "express";
import UsuarioController from "../controllers/usuariosController.js";

const router = express.Router();

router
    .get("/usuarios", UsuarioController.listarUsuarios)
    .get("/usuarios/:username", UsuarioController.listarUsuarioPorUsername);

export default router;