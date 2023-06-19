const express = require("express");
const routes = require('./routes');

const app = express();

//query strings
app.use(express.urlencoded({ extended: false }));
//for jsons
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hi')
});

app.use(routes);

app.listen(3030, () => console.log('RESTful server is listening on port 3030...'))