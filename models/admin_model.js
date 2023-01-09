const { STRING } = require("sequelize");

module.exports = (sequelize, Sequelize) => {

    const Admin_Login = sequelize.define('admin_login', {
    id: {
        type: Sequelize.STRING,
        primaryKey:true
    },

     role_id: { 
        type: Sequelize.STRING 
    },
    nama: { 
        type: Sequelize.STRING 
    },
    email: { 
        type: Sequelize.STRING 
    },
    password: { 
        type: Sequelize.STRING 
    },
    request_token: { 
        type: Sequelize.STRING 
    },
    acceptance_token: { 
        type: Sequelize.STRING 
    }
    });
    return Admin_Login;
 
 }

 