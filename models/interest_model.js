module.exports = (sequelize, Sequelize) => {

   const Interest = sequelize.define('interest', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    role_id: { 
        type: Sequelize.STRING
    },
    produk_id: { 
        type: Sequelize.STRING
    },
   
     name: {
      type: Sequelize.STRING
    },
     email: {
      type: Sequelize.STRING
    },
     name_company: {
      type: Sequelize.STRING
    },
     no_phone: {
      type: Sequelize.STRING
    },
    

   });
   return Interest;

}


 