import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/:id', (req, res) => {
    // console.log(req.query);
    // console.log(req.headers);
    // req.body
    // req.headers
    console.log(req.params);
    // res.send("getting root");
    res.status(404).send("not found");
})

app.listen(3000);
