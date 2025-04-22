const replaceYodaQuote = (quotesCollection, req, res) => {
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
}

export default replaceYodaQuote;