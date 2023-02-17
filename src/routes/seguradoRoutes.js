import express from "express";
import SeguradoController from "../controllers/seguradosController.js";

const router = express.Router();

router
    .get("/segurados", SeguradoController.listarSegurados)
    .get("/segurados/:n_cotacao", SeguradoController.listarSeguradoPorCotacao)
    .get("/segurados/cpf/:cpf_segurado", SeguradoController.listarSeguradoPorCPF)
    .post("/segurados", SeguradoController.cadastrarSegurado)
    .put("/segurados/:n_cotacao", SeguradoController.alterarSegurado);

export default router;