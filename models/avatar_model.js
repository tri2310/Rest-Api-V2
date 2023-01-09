module.exports = (sequelize, Sequelize) => {

   const Avatar = sequelize.define('avatar', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    nama: { 
        type: Sequelize.STRING
    },
    image: { 
        type: Sequelize.STRING
    },
   
     
    

   });
   return Avatar;

}


 