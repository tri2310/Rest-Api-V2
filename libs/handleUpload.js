const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public')
    },

    filename: (req, file, cb)=> {
        cb(null, Date.now() + '_' + file.originalname);
    }
})

const fileFilter = (req, file, cb)=> {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/glb' || file.mimetype === 'image/mp4' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jfif'){
        cb(null, true)
    }else {
        cb(null, false)
    }
} 

const upload = multer({
    storage: storage,
    limit: {
        fileSize: 1024 * 1024 * 3
    },
    fileFilter: fileFilter
})

module.exports = upload;