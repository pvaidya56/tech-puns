const express = require('express')
const router = express.Router()
const jsonWT = require('jsonwebtoken')

const { restricted } = require('./middleware.js')

const db = require('../data/dbConfig')
const helpers = require('./helpers.js')

//Getting ALL the puns
router.get('/', (req, res) => {
    helpers
    .getPuns()
    .then(puns => res.status(200).json(puns))
    .catch(err => res.status(500).json(err))
})

//Getting puns that belong to the LOGGED IN User
router.get('/userPuns', restricted, (req, res) => {
    const id = req.decodedJWT.subject 

    db('puns as p')
    .where('p.user_id', id)
    .then(puns => res.status(200).json(puns))
    .catch(err => res.status(500).json({error: err}))
})

//Adding puns
router.post('/add', restricted, (req, res) => {
    const pun = req.body

    helpers
    .insertPun(pun)
    .then(pun => res.status(201).json(pun))
    .catch(err => res.status(500).json({error: err}))
})

router.put('/editPUT/:id', restricted, (req, res) => {
    const id = req.params.id
    const body = req.body

    helpers
    .editPun(id, body)
    .then(updated => {
        if(!updated) {
            res.status(404).json({ message: `Pun with an ID of ${id} does NOT exist`})
        }
        res.status(200).json(updated)
    })
    .catch(err => res.status(500).json({ error: err }))
})


router.delete('/delete/:id', restricted, (req, res) => {
    const id = req.params.id

    helpers
    .deletePun(id)
    .then(deleted => {
        if(!deleted) {
            res.status(404).json({ message: `Pun with an ID of ${id} does NOT exist`})
        }
        res.status(200).json({ message: 'Pun successfully deleted!' })
    })
    .catch(err =>  res.status(500).json({ error: err }))
})


module.exports = router