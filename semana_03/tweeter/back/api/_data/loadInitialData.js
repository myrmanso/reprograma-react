function loadInitialData(db) {
    db.usuarios.insert(require('./usuarios.json'))
    db.tweets.insert(require('./tweets.json'))
}

module.exports = (db) => loadInitialData(db)