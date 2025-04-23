const replaceWithDarthVaderQuote = async() => {
    const endpoint = '/quotes';
    const options = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vader',
            quote: 'I find your lack of faith disturbing.'
        })
    }

    try {
        const res = await fetch(endpoint, options);
        if (res.ok) {
            // const message = await res.json();
            window.location.reload(true);
        } else {
            throw new Error('PUT request failed');
        }
    } catch(error) {
        console.error(error);
    }
    
}

export default replaceWithDarthVaderQuote;