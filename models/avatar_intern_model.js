module.exports = (sequelize, Sequelize) => {

    const AvatarIntern = sequelize.define('avatar_intern', {
    id: {
            type: Sequelize.STRING,
            primaryKey:true
        },
    nama_karakter: { 
        type: Sequelize.STRING 
    },
    image: {
        type:Sequelize.STRING
    },
    });
    return AvatarIntern;
 
 }

 