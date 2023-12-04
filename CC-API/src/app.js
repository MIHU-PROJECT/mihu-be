const express = require('express')
const connectDatabase = require('./config/database')
const cookieParser = require('cookie-parser');

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send({
        message: 'Success, Welcome!'
    })
})

const routes = require('./routes/routes');
app.use('/api', routes);

app.use((err, res) => {
    res.status(err.status || 404).send({
      status: err.status || 404,
      message: err.message,
    });
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server Listening to port ${PORT}`)
    connectDatabase();
})