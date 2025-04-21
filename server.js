const express = require('express');
const app = express();

// console.log('May Node be with you');
// console.log(__dirname);

const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://daltpettus:Eudaimonia13*@cluster0.sj8b5cc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

MongoClient.connect(connectionString)
    .then(client => {
        console.log('Connected to database');
        app.set('view engine', 'ejs')

        const db = client.db('star-wars-quotes');
        const quotesCollection = db.collection('quotes');

        app.use(express.urlencoded({ extended: true })); // allows us to read data from form element on its own, must be placed before CRUD handlers
        app.use(express.static('public')); // makes public folder publicly accessible
        app.use(express.json()); // instruct express to accept json data

        app.get('/', (req, res) => {
            const quotes = quotesCollection.find().toArray();
            
            quotes
            .then(results => {
                console.log(results);
                res.render('index.ejs', { quotes: results });
            })
            .catch(error => console.log(error));

            
            // res.sendFile(__dirname + '/index.html');
        })

        app.post('/quotes', (req, res) => {
            quotesCollection
                .insertOne(req.body)
                .then(result => {
                    console.log(result);
                    res.redirect('/');
                })
                .catch(error => console.error(error));
        })

        app.put('/quotes', (req, res) => {
            const reqData = req.body;
            console.log(reqData);

            const query = { name: 'Yoda' };

            const update = {
                $set: {
                    name: reqData.name,
                    quote: reqData.quote
                }
            }

            const options = { upsert: true }; // instructs to insert a document if none matching query are found

            //below method is simplified using mongoose
            quotesCollection.findOneAndUpdate(query, update, options)
                .then(result => {
                    // console.log(result);
                    res.json('success');
                })
                .catch(error => console.log(error));
        })

        app.listen(3000, () =>  {
            console.log('listening on 3000');
        })
    })
    .catch(error => console.error(error));



