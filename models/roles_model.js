module.exports = (sequelize, Sequelize) => {

   const Roles = sequelize.define('roles', {
    nama_role: { 
        type: Sequelize.STRING
    }

   });
   return Roles;

}


 