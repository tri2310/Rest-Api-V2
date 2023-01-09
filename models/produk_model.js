module.exports = (sequelize, Sequelize) => {

   const Produk = sequelize.define('produk', {
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
    deskripsi: {
      type: Sequelize.STRING
    },

   });
   return Produk;

}

