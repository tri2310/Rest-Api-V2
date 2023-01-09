const db = require('../models/bundle_model')

exports.create = async (req, res) => {
    const data = {
        id: uuidv4(),
        nama:req.body.nama,
        file: req.file.filename,
        url: func.convertToSlug(req.body.nama + " " + Math.random(1000))
    }

    db.video.create(data).then(result => {
        res.send({
            code: 200,
            message: 'Berhasil menyimpan data',
            data: result
        })
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Gagal menyimpan data'
        })
    })

}

exports.findAll = async(req, res) => {
    db.video.findAll().then(result => {
        if(result.length > 0){
             res.send({
            code: 200,
            message: 'OK',
            data: result
        })
        }else{
             res.send({
            code: 404,
            message: 'Tidak ada data'
        })
        }
       
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Gagal retrive data'
        })
    })
}

exports.findOne = async(req, res) => {
    const url = req.params.url;
    db.video.findOne({where: {url: url}}).then(result => {
         
        res.send({
            code: 200,
            message: 'OK',
            data: result
        })
       
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Gagal retrive data'
        })
    })
}

exports.update = async(req, res) => {
    const id = req.params.id;

    const data = { 
        nama: req.body.nama,
 
    }

    db.video.update(data, {
        where: {id: id}
    }).then(result => {
        if(result[0]){
             res.send({
            code: 200,
            message: 'Berhasil update data'
        })
        }else{
            res.status(422).send({
            code: 422,
            message: 'Gagal update data, field error'
        })
        }
    }).catch(err => {
         res.status(500).send({
            code: 500,
            message: 'Gagal update data'
        })
    })

}

exports.delete = async(req, res) => {
    const id = req.params.id;

    db.video.destroy({
        where: {id: id}
    }).then(result => {
       
        res.send({
            code: 200,
            message: 'Berhasil menghapus data'
        })
       
    }).catch(err => {
         res.status(500).send({
            code: 500,
            message: 'Gagal hapus data'
        })
    })
}




