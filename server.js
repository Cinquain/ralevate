const bodyParser = require('body-parser');
const express = require('express');
const app = express()

const PORT = process.env.PORT || 5005

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.listen(PORT, () => {
    console.log('Server is up and running...')
})


app.get("/", (req, res) => {
    res.render('index.html');
})