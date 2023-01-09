module.exports = {
    BASE_URL: 'http://127.0.0.1:7000/',
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DBNAME: 'api_v2_indonesia',
    dialect: 'mysql',
    DBPORT: 3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}