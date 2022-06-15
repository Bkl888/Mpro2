const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const model = require('../../model/index')

async function login(req, res) {
    try {
        const results = await model.user.findOne({where: { name: req.body.name }})
        if (results.length < 1) {
            return res.status(204).send({ message: 'Data not found' })
        }

        if (!bcrypt.compareSync(req.body.password, results.password)) {
            return res.status(400).send({ message: 'Username or password is wrong' })
        }
    
        // Information about users saved to payload
        const payload = {
            id: results.id,
            username: results.name,
        }
        const token = jwt.sign(payload, 'secret', { expiresIn: '7d' })
    
        return res.send({ message: 'Data is found', data: { token: token } })
    } catch (error) {
        return res.status(204).send({ message: 'Data not found' })
    }
}

module.exports = {
    login,
}
