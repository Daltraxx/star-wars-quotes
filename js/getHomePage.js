const getHomePage = async(quotesCollection, res) => {
    try {
        const results = await quotesCollection.find().toArray();
        //console.log(results);
        res.render('index.ejs', { quotes: results });
    } catch(error) {
        console.error(error);
    }
}

export default getHomePage;