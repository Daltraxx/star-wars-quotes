import noMoreVaderQuotes from "./noMoreVaderQuotes.js";

const deleteFirstVaderQuote = async() => {
    const endpoint = '/quotes';
    const options = {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Darth Vader' })
    }

    try {
        const res = await fetch(endpoint, options);
        if (res.ok) {
            const message = await res.json();
            console.log(message);
            message === 'No quote to delete.' ? noMoreVaderQuotes() : window.location.reload();
        } else {
            throw new Error('delete request failed');
        }
    } catch(error) {
        console.error(error);
    }
}

export default deleteFirstVaderQuote;