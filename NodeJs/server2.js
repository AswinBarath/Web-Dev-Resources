import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("getting root");
})

app.get('/profile', (req, res) => {
    res.send("getting profile");
})

app.post('/profile', (req, res) => {
    res.send("<h1>hello</h1>")
    console.log(req.body)
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user);
})
// app.get('/', (req, res) => {
//     // res.send("<h1>hello</h1>")
//     const user = {
//         name: 'Sally',
//         hobby: 'soccer'
//     }
//     res.send(user);
// })
app.listen(3000);
