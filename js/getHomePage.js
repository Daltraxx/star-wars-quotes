const getHomePage = (quotesCollection, res) => {
    const quotes = quotesCollection.find().toArray();
        
        quotes
        .then(results => {
            // console.log(results);
            res.render('index.ejs', { quotes: results });
        })
        .catch(error => console.log(error));
}

export default getHomePage;