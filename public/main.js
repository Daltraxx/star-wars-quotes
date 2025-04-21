const updateBtn = document.querySelector('#update-button');

const replaceWithDarthVaderQuote = () => {
    //convert to async function with try catch and await?
    const endpoint = '/quotes';
    fetch(endpoint, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vader',
            quote: 'I find your lack of faith disturbing.'
        })
    })
        .then(res => {
            if (res.ok) return res.json();
        })
        .then(res => {
            console.log(res);
            window.location.reload(true); // refreshes page to see changes, could instead use js to update DOM
        })
}

updateBtn.addEventListener('click', replaceWithDarthVaderQuote);