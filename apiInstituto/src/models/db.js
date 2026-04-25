const Sequelize = require('sequelize')

const sequelize = new Sequelize('instituto', 'postgres', '1910',{
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})

async function myFunctionData() {
    await sequelize.authenticate();
    console.log('Conexão com database concluida')
}

myFunctionData()