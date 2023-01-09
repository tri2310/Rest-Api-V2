const Sequelize = require("sequelize")
const dbConfig = require('../config/config');

const sequelize = new Sequelize(
 dbConfig.DBNAME,
 dbConfig.USER,
 dbConfig.PASSWORD,
 {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    port: dbConfig.DBPORT,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
 }
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.roles = require('./roles_model')(sequelize, Sequelize);
db.interest = require('./interest_model')(sequelize, Sequelize);
db.produk = require('./produk_model')(sequelize, Sequelize);
db.kategori = require('./kategori_model')(sequelize, Sequelize);
db.avatar = require('./avatar_model')(sequelize, Sequelize);
db.admin_login = require('./admin_model')(sequelize, Sequelize);
db.avatar_intern = require('./avatar_intern_model')(sequelize, Sequelize);
db.video = require('./video_model')(sequelize, Sequelize);


//relasi produk dengan kategorinya
db.kategori.hasMany(db.produk, {foreignKey: "kategori_id", onDelete: 'SET NULL'});
db.produk.belongsTo(db.kategori, {foreignKey: "kategori_id", onDelete: 'SET NULL'});


//relasi interest dengan produk
db.produk.hasMany(db.interest, {foreignKey: "produk_id", onDelete: 'SET NULL'});
db.interest.belongsTo(db.produk, {foreignKey: "produk_id", onDelete: 'SET NULL'});


module.exports = db;