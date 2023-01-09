const db = require('../models/bundle_model')

exports.create = async (req, res) => {
    const data = {
        id: uuidv4(),
        kategori_id: req.body.kategori_id,
        nama: req.body.nama,
        image: req.file.filename,
        deskripsi: req.body.deskripsi,
        url: func.convertToSlug(req.body.nama + " " + Math.random(1000))
    }

    db.produk.create(data).then(result => {
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
    db.produk.findAll().then(result => {
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
    db.produk.findOne({where: {url: url}}).then(result => {
         
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
       
        deskripsi: req.body.deskripsi,
       
    }

    db.produk.update(data, {
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

    db.produk.destroy({
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




