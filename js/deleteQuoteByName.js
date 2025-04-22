const deleteQuoteByName = (quotesCollection, req, res) => {
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
}

export default deleteQuoteByName;