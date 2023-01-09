module.exports = (sequelize, Sequelize) => {

   const Kategori = sequelize.define('kategori', {
    nama_kategori: { 
        type: Sequelize.STRING
    }

   });
   return Kategori;

}


 