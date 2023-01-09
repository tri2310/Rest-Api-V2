const db = require('../models/bundle_model');
const Op = db.Sequelize.Op;
const func = require('../libs/function');
const {v4: uuidv4} = require('uuid');

//roles
exports.getRolesHome = async (req, res) => {
    db.roles.findAll({
    attributes: ['id', 'nama_role']
    }).then(result => {
        if(result.length > 0){
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else {
            res.status(404).send({
                code: 404,
                message: 'Data tidak ada'
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Error find Data >' + err
        })
    })
}

exports.getrolesPage = async (req, res) => {
   let keyword = '';
    const condition = [];

    if(req.query.keyword){
        keyword = req.query.keyword;
        condition.push({nama_role: {[Op.like] : '%' + keyword + '%'}})
    }

    db.roles.findAll({
        where: condition,
        attributes: ['id', 'nama_role']
    }).then(result => {
        if(result.length > 0) {
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else{
            res.status(404).send({
                code: 404,
                message: `Tidak ada data yang cocok pada keyword '${keyword}'`
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message:'Error find data > ' + err
        })
    })
}


exports.getrolesDetail = async (req, res) => {
    const id = req.params.id;
    db.roles.findOne({
        where: {id: id},
        include: [
           {
            //  model: db.
           }
        ]
    }).then(result => {
        if(result){ 
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else{
            res.status(404).send({
                code: 404,
                message: 'hmmm...sepertinya Data Roles ini telah dihapus'
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Error retrive data',
        })
    })
}



//interest
exports.getInterestHome = async (req, res) => {
    db.interest.findAll({
    attributes: ['id', 'name', 'name_company','email','no_phone']
    }).then(result => {
        if(result.length > 0){
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else {
            res.status(404).send({
                code: 404,
                message: 'Data tidak ada'
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Error find Data >' + err
        })
    })
}

exports.getinterestPage = async (req, res) => {
   let keyword = '';
    const condition = [];

    if(req.query.keyword){
        keyword = req.query.keyword;
        condition.push({name: {[Op.like] : '%' + keyword + '%'}})
    }

    db.interest.findAll({
        where: condition,
        attributes: ['id', 'name', 'name_company', 'email', 'no_phone']
    }).then(result => {
        if(result.length > 0) {
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else{
            res.status(404).send({
                code: 404,
                message: `Tidak ada data yang cocok pada keyword '${keyword}'`
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message:'Error find data > ' + err
        })
    })
}


exports.getinterestDetail = async (req, res) => {
    const id = req.params.id;
    db.interest.findOne({
        where: {id: id},
        include: [
           {
            //  model: db.produk,
           }
        ]
    }).then(result => {
        if(result){ 
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else{
            res.status(404).send({
                code: 404,
                message: 'hmmm...sepertinya Data ini telah dihapus'
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Error retrive data',
        })
    })
}



//produk
exports.getProdukHome = async (req, res) => {
    db.produk.findAll({
       
    attributes: ['id', 'nama', 'harga','image','url']
    }).then(result => {
        if(result.length > 0){
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else {
            res.status(404).send({
                code: 404,
                message: 'Data tidak ada'
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Error find Data >' + err
        })
    })
}

exports.getprodukPage = async (req, res) => {
   let keyword = '';
    const condition = [];

    if(req.query.keyword){
        keyword = req.query.keyword;
        condition.push({nama: {[Op.like] : '%' + keyword + '%'}})
    }

    db.produk.findAll({
        where: condition,
        attributes: ['id', 'nama', 'harga','image','url']
    }).then(result => {
        if(result.length > 0) {
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else{
            res.status(404).send({
                code: 404,
                message: `Tidak ada data yang cocok pada keyword '${keyword}'`
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message:'Error find data > ' + err
        })
    })
}


exports.getprodukDetail = async (req, res) => {
    const id = req.params.id;
    db.produk.findOne({
        where: {id: id},
        include: [
           {
             model: db.kategori,
           }
        ]
    }).then(result => {
        if(result){ 
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else{
            res.status(404).send({
                code: 404,
                message: 'hmmm...sepertinya Data ini telah dihapus'
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Error retrive data',
        })
    })
}



//kategori produk

exports.getKategoriHome = async (req, res) => {
    db.kategori.findAll({
       
    attributes: ['id', 'nama_kategori']
    }).then(result => {
        if(result.length > 0){
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else {
            res.status(404).send({
                code: 404,
                message: 'Data tidak ada'
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Error find Data >' + err
        })
    })
}

exports.getkategoriPage = async (req, res) => {
   let keyword = '';
    const condition = [];

    if(req.query.keyword){
        keyword = req.query.keyword;
        condition.push({nama_kategori: {[Op.like] : '%' + keyword + '%'}})
    }

    db.kategori.findAll({
        where: condition,
        attributes: ['id', 'nama_kategori']
    }).then(result => {
        if(result.length > 0) {
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else{
            res.status(404).send({
                code: 404,
                message: `Tidak ada data yang cocok pada keyword '${keyword}'`
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message:'Error find data > ' + err
        })
    })
}


exports.getkategoriDetail = async (req, res) => {
    const id = req.params.id;
    db.kategori.findOne({
        where: {id: id},
        include: [
           {
            //  model: db.kategori,
           }
        ]
    }).then(result => {
        if(result){ 
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else{
            res.status(404).send({
                code: 404,
                message: 'hmmm...sepertinya Data ini telah dihapus'
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Error retrive data',
        })
    })
}





//avatar internal

exports.getAvatarHome = async (req, res) => {
    db.avatar.findAll({
       
    attributes: ['id', 'nama','image','url']
    }).then(result => {
        if(result.length > 0){
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else {
            res.status(404).send({
                code: 404,
                message: 'Data tidak ada'
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Error find Data >' + err
        })
    })
}

exports.getavatarPage = async (req, res) => {
   let keyword = '';
    const condition = [];

    if(req.query.keyword){
        keyword = req.query.keyword;
        condition.push({nama: {[Op.like] : '%' + keyword + '%'}})
    }

    db.avatar.findAll({
        where: condition,
        attributes: ['id', 'nama','image','url']
    }).then(result => {
        if(result.length > 0) {
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else{
            res.status(404).send({
                code: 404,
                message: `Tidak ada data yang cocok pada keyword '${keyword}'`
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message:'Error find data > ' + err
        })
    })
}


exports.getavatarDetail = async (req, res) => {
    const id = req.params.id;
    db.avatar.findOne({
        where: {id: id},
        include: [
           {
            //  model: db.kategori,
           }
        ]
    }).then(result => {
        if(result){ 
            res.send({
                code: 200,
                message: 'OK',
                data: result
            })
        }else{
            res.status(404).send({
                code: 404,
                message: 'hmmm...sepertinya Data ini telah dihapus'
            })
        }
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: 'Error retrive data',
        })
    })
}