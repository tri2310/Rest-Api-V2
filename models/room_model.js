module.exports = (sequelize, Sequelize) => {

   const Room = sequelize.define('room', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    nama_room: { 
        type: Sequelize.STRING
    },
   
     max_users: {
      type: Sequelize.STRING
    },
    
     user_id: {
      type: Sequelize.STRING
    },
    

   });
   return Room;

}


 