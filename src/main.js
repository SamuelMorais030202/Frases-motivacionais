const getButton = document.querySelector('.get-quote')
const quoteText = document.querySelector('.quote')
const quotAuthorText = document.querySelector('.author')
const errorText = document.querySelector('.error')
const API_URL = `https://dummjson.com/quotes/random`;

getButton.addEventListener('click', async () => {
    try {
    const response = await fetch(API_URL);
    const data = await response.json();
    quoteText.innerText = data.quote;
    quotAuthorText.innerText = data.author;
    errorText.innerHTML = '';
    } catch (error) {
        quoteText.innerHTML = '';
        quotAuthorText.innerHTML = '';
        errorText.innerHTML = error.message
    }
})