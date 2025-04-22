import express from 'express';
const app = express();

import { MongoClient } from 'mongodb';
const connectionString = 'mongodb+srv://daltpettus:Eudaimonia13*@cluster0.sj8b5cc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

import getHomePage from './js/getHomePage.js';
import addQuote from './js/addQuote.js';

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
            getHomePage(quotesCollection, res);
        })

        app.post('/quotes', (req, res) => {
            addQuote(quotesCollection, res);
        })

        app.put('/quotes', (req, res) => {
            const reqData = req.body;
            console.log(req.body);

            const query = { name: 'Yoda' };

            const update = {
                $set: {
                    name: reqData.name,
                    quote: reqData.quote
                }
            }

            const options = { upsert: true }; // instructs to insert a document if none matching query are found

            //below method is simplified using mongoose
            //consider modifying so it only adds quote if matching one isn't already there
            quotesCollection.findOneAndUpdate(query, update, options)
                .then(result => {
                    // console.log(result);
                    res.json('success');
                })
                .catch(error => console.error(error));
        })

        app.delete('/quotes', (req, res) => {
            const reqData = req.body;
            console.log(reqData);


            const query = { name : reqData.name };
            
            quotesCollection.deleteOne(query)
                .then(result => {
                    if (result.deletedCount === 0) {
                        return res.json('No quote to delete');
                    }
                    res.json(`Deleted quote by ${query.name}`);
                })
                .catch(error => console.error(error))
        })

        app.listen(3000, () =>  {
            console.log('listening on 3000');
        })
    })
    .catch(error => console.error(error));



