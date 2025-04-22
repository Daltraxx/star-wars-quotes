import express from 'express';
const app = express();

import { MongoClient } from 'mongodb';
const connectionString = 'mongodb+srv://daltpettus:Eudaimonia13*@cluster0.sj8b5cc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

import getHomePage from './js/getHomePage.js';
import addQuote from './js/addQuote.js';
import replaceYodaQuote from './js/replaceYodaQuote.js';
import deleteQuoteByName from './js/deleteQuoteByName.js';

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
            addQuote(quotesCollection, req, res);
        })

        app.put('/quotes', (req, res) => {
            replaceYodaQuote(quotesCollection, req, res);
        })

        app.delete('/quotes', (req, res) => {
            deleteQuoteByName(quotesCollection, req, res);
        })

        app.listen(3000, () =>  {
            console.log('listening on 3000');
        })
    })
    .catch(error => console.error(error));



