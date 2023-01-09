const db = require('../models/bundle_model')

exports.create = async (req, res) => {
    const data = {
        id: uuidv4(),
        role_id: req.body.role_id,
        produk_id: req.body.produk_id,
        name: req.body.name,
        email: req.body.email,
        no_phone: req.body.no_phone,
        name_company: req.body.name_company,
    }

    db.interest.create(data).then(result => {
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
    db.interest.findAll().then(result => {
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
    const id = req.params.id;
    db.interest.findOne({where: {id: id}}).then(result => {
         
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
        produk_id: req.body.produk_id,
        name: req.body.name,
        email: req.body.email,
        no_phone: req.body.no_phone,
        name_company: req.body.name_company,
    }

    db.interest.update(data, {
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

    db.interest.destroy({
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