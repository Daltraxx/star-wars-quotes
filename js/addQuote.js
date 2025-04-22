const addQuote = (quotesCollection, res) => {
    //should first check if quote already exists first
    quotesCollection
        .insertOne(req.body)
        .then(result => {
            console.log(result);
            res.redirect('/');
        })
        .catch(error => console.error(error));
}

export default addQuote;