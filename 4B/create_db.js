const mysql = require('mysql')

// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', //your usrnm
    password: 'pandawa5',//your pw
    database: 'belajar_mysql'
    
})

// connect
db.connect((err) => {
    if(err) {
        throw err
    }
    console.log('mysql connected')
})

const createDb = (dbName) => {
    let sql = `CREATE DATABASE ${dbName}`
    db.query(sql, (err, result) => {
        if(err) throw err
        console.log('database created')
    })
}


// create table hero_tb
const createTableHero = () => {
    let sql = 'CREATE TABLE hero_tb(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), str INT, agi INT, vit INT, def INT, image VARCHAR(100), role VARCHAR(100))'
    db.query(sql, (err, result) => {
        if(err) throw err
        console.log('hero_tb created')
        
    })
}

const createTableRole = () => {
    let sql = 'CREATE TABLE role_tb(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), hero_id VARCHAR(100))'
    db.query(sql, (err, result) => {
        if(err) throw err
        console.log("role_created")
    })
}

// createTableHero()
// createTableRole()

// createDb('belajar_mysql')