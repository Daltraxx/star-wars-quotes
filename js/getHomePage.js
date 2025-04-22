const getHomePage = (quotesCollection, res) => {
    const quotes = quotesCollection.find().toArray()
        .then(results => {
            // console.log(results);
            res.render('index.ejs', { quotes: results });
        })
        .catch(error => console.error(error));
}

export default getHomePage;