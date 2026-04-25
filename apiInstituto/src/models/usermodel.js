const Sequelize = require('sequelize')
const { FORCE } = require('sequelize/lib/index-hints')


const sequelize = new Sequelize('instituto', 'postgres', '1910',{
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})

const Usuarios = sequelize.define('Usuarios', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoincrement : true
    },
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
     senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
})



Usuarios.sync({alter : true}).then((data)=>{
    console.log('tabela e modelo foram concluidos!!!')
}).catch((err)=>{
    console.log('Sincronização entre modelo e tabela falhou!!!')
})


module.exports(Usuarios)