const deleteFirstVaderQuote = () => {
    const messageSection = document.querySelector('#message');
    const endpoint = '/quotes';
    fetch(endpoint, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Darth Vader' })
    })
        .then(res => {
            if (res.ok) return res.json();
        })
        .then(res => {
            console.log(res);
            if (res === 'No quote to delete.') {
                messageSection.textContent = 'No Darth Vader quote to delete!';
            } else {
                window.location.reload();
            }
        })
}

export default deleteFirstVaderQuote;