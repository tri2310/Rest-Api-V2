module.exports = (sequelize, Sequelize) => {

   const Video = sequelize.define('video', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    nama: { 
        type: Sequelize.STRING
    },
   
    file: {
      type: Sequelize.STRING
    },
    
    
    

   });
   return Video;

}


 