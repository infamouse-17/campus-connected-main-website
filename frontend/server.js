const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '123',
        database: 'campus_connected'
    }
})

const app = express();

let initialPath = path.join(__dirname, "login page");

app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "Peers", "index.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(initialPath, "login.html"));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(initialPath, "register.html"));
})

app.post('/register-user', (req, res) => {
    const { name,reg_no, email, password } = req.body;

    if(!name.length || !email.length || !password.length){
        res.json('fill all the fields');
    } else{
        db("users").insert({
            name: name,
            reg_no: reg_no,
            email: email,
            password: password
        })
        .returning(["name", "email"])
        .then(data => {
            res.json(data[0])
        })
        .catch(err => {
            if(err.detail.includes('already exists')){
                res.json('email already exists');
            }
        })
    }
})

app.post('/login-user', (req, res) => {
    const { email, password } = req.body;

    db.select('name', 'email')
    .from('users')
    .where({
        email: email,
        password: password
    })
    .then(data => {
        if(data.length){
            res.json(data[0]);
        } else{
            res.json('Email or Password is incorrect');
        }
    })
})

app.listen(3000, (req, res) => {
    console.log('listening on port 3000......')
})