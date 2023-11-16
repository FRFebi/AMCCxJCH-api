const Sequelize = require('sequelize');
// const sequelize = new Sequelize(
//     "mysql://root:1234567890@localhost:3306/store"    
// ); 

const sequelize = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASS,
    {
        host: process.env.MYSQL_HOST,
        dialect: "mysql"
    })

try {
    sequelize.authenticate()
    console.log("Database Connection has been established")
}catch(error){
    console.error("Unable to connect to database:", error)
}

module.exports = {
    sequelize
}

// module.exports = {
//     HOST: process.env.MYSQL_HOST,
//     PORT:process.env.MYSQL_PORT,
//     USER:process.env.MYSQL_USER,
//     PASSWORD: process.env.MYSQL_PASS,
//     DB: process.env.MYSQL_DB,
//     dialect: "mysql",
//     pool: {
//         max:5,
//         min:0,
//         acquire: 30000,
//         idle:10000
//     }
// }