const addQuote = async(quotesCollection, req, res) => {
    //should first check if quote already exists first
    //console.log(req.body);
    try {
        const result = await quotesCollection.insertOne(req.body);
        console.log(result)
        res.redirect('/');
    } catch(error) {
        console.error(error);
    }
}

export default addQuote;