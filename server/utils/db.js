// import config, mysql, and connection thingy from mysql

const config = require('config')
const mysql = require('mysql')

// set connection for sql equal to object with info for connection
// host, user, password, and database to look to

const connection = mysql.createConnection({ 
  host: config.get('db.host'),
  user: config.get('db.user'),
  password: config.get('db.password'),
  database: config.get('db.database')
})

// export the connection to the other components

module.exports = connection