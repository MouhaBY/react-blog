const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database : 'mydb',
    password : "125",
    port: 5432
})

module.exports = pool;