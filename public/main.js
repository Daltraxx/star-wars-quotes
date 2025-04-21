const updateBtn = document.querySelector('#update-button');

const replaceWithDarthVaderQuote = () => {
    const endpoint = '/quotes';
    fetch(endpoint, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vader',
            quote: 'I find your lack of faith disturbing.'
        })
    })
}

updateBtn.addEventListener('click', replaceWithDarthVaderQuote);