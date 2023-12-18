const express = require('express')
const connectDatabase = require('./config/database')
const cookieParser = require('cookie-parser');
const routes = require('./routes/routes');
const PORT = process.env.PORT

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.get('/', (req, res) => {
    res.send({
        message: 'Success, Welcome!'
    })
})

app.listen(PORT, async () => {
    await connectDatabase();
    console.log(`Server Listening to port ${PORT}`)
})
