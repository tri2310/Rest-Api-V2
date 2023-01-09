const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const db = require('./models/bundle_model');
const Cors = require('cors')

app.use('/public', express.static('public'));
app.use(bodyParser.json())
app.use(Cors());
app.use(bodyParser.urlencoded({extended: false}))
db.sequelize.sync({force: false})



//route untuk ROLE
const rolesRouter = require('./routes/roles');
app.get('/roles', rolesRouter);
app.get('/roles/:url', rolesRouter);
app.post('/roles', rolesRouter);
app.put('/roles/:id', rolesRouter);
app.delete('/roles/:id', rolesRouter);



//route untuk Interest
const interestRouter = require('./routes/interest');
app.get('/interest', interestRouter);
app.get('/interest/:url', interestRouter);
app.post('/interest', interestRouter);
app.put('/interest/:id', interestRouter);
app.delete('/interest/:id', interestRouter);


//route untuk Produk
const produkRouter = require('./routes/produk');
app.get('/produk', produkRouter);
app.get('/produk/:url', produkRouter);
app.post('/produk', produkRouter);
app.put('/produk/:id', produkRouter);
app.delete('/produk/:id', produkRouter);



//route untuk Kategori
const kategoriRouter = require('./routes/kategori');
app.get('/kategori', kategoriRouter);
app.get('/kategori/:id', kategoriRouter);
app.post('/kategori', kategoriRouter);
app.put('/kategori/:id', kategoriRouter);
app.delete('/kategori/:id', kategoriRouter);


//route untuk Avatar
const avatarRouter = require('./routes/avatar');
app.get('/avatar', avatarRouter);
app.get('/avatar/:url', avatarRouter);
app.post('/avatar', avatarRouter);
app.put('/avatar/:id', avatarRouter);
app.delete('/avatar/:id', avatarRouter);

//route untuk avatar intern
const avatarInternRouter = require('./routes/avatar_intern');
app.get('/avatar_intern', avatarInternRouter);
app.get('/avatar_intern/:id', avatarInternRouter);
app.post('/avatar_intern', avatarInternRouter);
app.put('/avatar_intern/:id', avatarInternRouter);
app.delete('/avatar_intern/:id', avatarInternRouter);

//route untuk admin
const adminRouter = require('./routes/admin');
app.get('/admin/login', adminRouter);
app.get('/admin/:id', adminRouter);
app.post('/admin/login', adminRouter);
app.put('/admin/:id', adminRouter);
app.delete('/admin/:id', adminRouter);



//route untuk Room
const roomRouter = require('./routes/room');
app.get('/room', roomRouter);
app.get('/room/:id', roomRouter);
app.post('/room', roomRouter);
app.put('/room/:id', roomRouter);
app.delete('/room/:id', roomRouter);



//route untuk Video
const videoRouter = require('./routes/video');
app.get('/video', videoRouter);
app.get('/video/:id', videoRouter);
app.post('/video', videoRouter);
app.put('/video/:id', videoRouter);
app.delete('/video/:id', videoRouter);


//route untuk frontend
const frontendRouter = require('./routes/frontend');
app.use('/frontend', frontendRouter);


module.exports = app;
