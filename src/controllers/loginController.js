import usuarios from "../models/Usuario.js";

class LoginController {

    static logar = async (req, res) => {

        let {usuario, senha} = req.body;
        let user = await usuarios.findOne({ "username": usuario });
        
        if(user){
            res.status(200).send({ sucesso: true, usuarioLogado: (user.senha == senha ? user.username : null) });
        }
        else{
            res.status(200).send({ sucesso: false, usuarioLogado:  null });
        }
    }

}

export default LoginController;