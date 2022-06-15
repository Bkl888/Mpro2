const models = require('../../model/index') 


function insertproduct(req, res) {
    let form = req.body
    models.product.create(form)

    return res.send('Data has been created')
}

async function listproduct(req, res) {
    const result = await models.product.findAll()
    if (result.length < 1) {
        return res.status(204).send({ message: 'Data is empty' })
    }
    return res.send({ message: 'Data is found', data: result })
}

async function detailproduct(req, res) {
    const result = await models.product.findOne({ where: { id: req.params.id } })
    if (!result) {
        return res.status(204).send({ message: 'Data is empty' })
    }
    return res.send({ message: 'Data is found', data: result })
}

function updateproduct(req, res) {
    let data = req.body
    models.product.update(data, { where: { id: req.params.id } })
    
    return res.send({ message: 'Data has been updated', data: req.body })
}

function deleteproduct(req, res) {
    models.product.destroy({ where: { id: req.params.id } })
    return res.send({ message: 'Data has been deleted' })
}


function insertuser(req, res) {
    let form = req.body
    models.user.create(form)
    return res.send({ message: 'Data has been created', data: form })
}

function deleteuser(req, res) {
    models.user.destroy({ where: { id: req.params.id } })
    return res.send({ message: 'Data has been deleted' })
}
        


module.exports = {
    insertproduct,
    listproduct,
    detailproduct,
    updateproduct,
    deleteproduct,
    insertuser,
    deleteuser
}