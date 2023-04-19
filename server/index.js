require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const PORT = process.env.PORT || 8000
const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/whatsapp_clone'; 

const connectdb  = require('./database/db');
const route = require('./routes/routes')

connectdb(DATABASE_URI)
app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', route)

app.listen(PORT, () => {
    console.log(`listening to server http://localhost:${PORT}`);
})