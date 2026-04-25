const { Sequelize } = require('sequelize');
const Usuarios = require ('../models/usermodel')


const registrar = async (req, res) =>{
    const {nome, sobrenome, email, senha}


    if (!nome || !sobrenome || !email || !senha){
        return res.status(400).json({error: 'Usuário,sobrenome, senha e e-mail são obrigatórios'})
    }
    try {
    const usuarioExistente = await Usuarios.findOne({ 
      where: {
        [Sequelize.Op.or]: [
          { nome },
          { email }
        ]
      } 
    });

   if (usuarioExistente) {
      return res.status(400).json({ error: 'Nome de usuário ou e-mail já existente' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}