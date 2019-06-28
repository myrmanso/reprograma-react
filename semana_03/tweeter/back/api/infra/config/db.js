const Datastore = require('nedb')
const loadInitialData = require('../../_data/loadInitialData')

const dbConfig = {
    inMemoryOnly: true,
    autoload: true,
    timestampData: true
}

db              = {};
db.usuarios     = new Datastore(dbConfig);
db.tweets      = new Datastore(dbConfig);


loadInitialData(db)

module.exports = () => db