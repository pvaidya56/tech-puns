const db = require('../data/dbConfig')


module.exports = {
    get,
    insert,
    findBy,
    editUser,
    deleteUser,
    getPuns,
    insertPun,
    deletePuns,
    editPun,
    getLikes,
    addLikes,
    editLikes,
    deleteLikes
}

function get() {
    return db('users')
} 

function insert(user) {
    return db('users')
    .insert(user)
    .then(ids => ids[0])
}

function findBy(credentials) {
    return db('users')
    .where(credentials)
}

function editUser(id, user) {
    return db('users')
    .where({ id })
    .update(user)
}

function deleteUser(id) {
    return db('users')
    .where({ id })
    .del()
}



// PUNS helpers

function getPuns() {
    return db('puns')
}

function insertPun(pun) {
    return db('pun')
    .insert(pun)
    .then(ids => ids[0])
}

function deletePuns(id) {
    return db('puns')
    .where({ id })
    .del()
}

function editPun(id, pun) {
    return db('pun')
    .where({ id })
    .update(pun)
}


//LIKED TABLE HELPERS

function getLikes() {
    return db('liked')
}

function addLikes(like) {
    return db('liked')
    .insert(like)
    .then(ids => ids[0])
}

function editLikes(id, like) {
    return db('liked')
    .where({ id })
    .update(like)
}

function deleteLikes(id) {
    return db('liked')
    .where({ id })
    .del()
}