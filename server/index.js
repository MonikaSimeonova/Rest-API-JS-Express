const express = require("express");
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');

const {auth} = require('./middlewares/authMIddleware')

const app = express();

mongoose.connect('mongodb://localhost:27017/furniture-rest-api')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err))

//query strings
app.use(express.urlencoded({ extended: false }));
//for jsons
app.use(express.json());
app.use(cors());
app.use(auth)

//cors middleware
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     res.setHeader('Access-Control-Allow-Headers', '*');

//     next()
// });


app.get('/', (req, res) => {
    res.send('hi')
});

app.use(routes);

app.listen(3030, () => console.log('RESTful server is listening on port 3030...'))