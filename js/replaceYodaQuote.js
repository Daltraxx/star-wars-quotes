const replaceYodaQuote = async(quotesCollection, req, res) => {
    //below process is simplified using mongoose
    //consider modifying so it only adds quote if matching one isn't already there
    const reqData = req.body;
    //console.log(req.body);

    const query = { name: 'Yoda' };

    const update = {
        $set: {
            name: reqData.name,
            quote: reqData.quote
        }
    }

    const options = { upsert: true }; // instructs to insert a document if none matching query are found

    try {
        const updateResult = await quotesCollection.findOneAndUpdate(query, update, options);
        console.log(updateResult);
        res.json('Success');
    } catch(error) {
        console.error(error);
    }
}

export default replaceYodaQuote;