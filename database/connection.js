const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect : "mysql",
    host:"localhost",
    username : "root",
    database :"new_project",
    password: ""

})

sequelize.authenticate()
.then(()=>{
    console.log('DB connected');
})
.catch(error=>{
    console.log('CONNECTION FAILED:',error.message);
})

// for create table default 
sequelize.sync({force:false})

module.exports = sequelize;