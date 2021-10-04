const express = require('express')
const expressLayouts = require('express-ejs-layouts')
// connect to mysql
var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pandawa5",
  database: "belajar_mysql"
});

const app = express()
const port = 3000

// setup EJS
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => {
    let sql='SELECT * FROM hero_tb'
    db.query(sql, (err, data, fields) => {
        if (err) throw err
        let sqlRole = 'SELECT * FROM role_tb;'
        db.query(sqlRole, (err, result) => {
            if(err) throw err
            res.render('index', {
                title: 'User List',
                layout: 'layouts/main',
                data,
                result
            })
        })
    })
})
app.post('/add', (req, res) => {
    const {name, role, str, agi, vit, def, image, id} = req.body
    var sqlAdd = `INSERT INTO hero_tb (name, str, agi, vit, def, image, role)
    values ("${name}", ${str}, ${agi}, ${vit},${def},"${image}", "${role}")`
    db.query(sqlAdd, (err, data, fields) => {
        if(err) throw err
        let sqlRole = `INSERT INTO role_tb (name, hero_id)
        values ("${role}", "${id}")`
        db.query(sqlRole, (err, result) => {
            if(err) throw err
            res.redirect('/')
        })
        
    })
    
})

app.get('/add', (req, res) => {
    
    // var sqlAdd = 'INSERT INTO hero_tb (nama, str, agi, vit, def, image) VALUES ('
    res.render('post', {
        title: 'User List',
        layout: 'layouts/main'
        
    })
})

app.get('/delete/:id', (req, res) => {
    let param = req.params.id
    let sql=`DELETE FROM hero_tb WHERE id=${param}`
    db.query(sql, (err, data, fields) => {
        if (err) throw err
        db.query(`DELETE FROM role_tb WHERE id=${param}`)
        res.redirect('/')
    })
})

app.post('/update/:id', (req, res) => {
    let param = req.params.id
    let sql = `update hero_tb set role="${req.body.role}" where id =${param}`
    db.query(sql, (err, data, fields) => {
        if (err) throw err
        db.query(`update role_tb set name="${req.body.role}" where id =${param}`, (err, result) => {
            if(err) throw err
            res.redirect('/') 
        })
    })
})
app.get('/update/:id', (req, res) => {
    let param = req.params.id

    res.render('update', {
        param,
        layout: 'layouts/main',
        title: 'Update'
    })
})



app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})