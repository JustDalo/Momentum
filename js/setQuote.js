//get Quote
document.addEventListener('DOMContentLoaded', () => {
  let quotes;
  let authors;
  
  function getQuote() {
    fetch("https://favqs.com/api/qotd")
      .then(response => response.json())
      .then(data => {
        const {quote} = data;
        
        quotes = quote.body;
		authors = quote.author;
      
        document.getElementById('text').innerHTML = `<span>"<span>${quotes}<span>"<span>`;
		document.getElementById('author').innerHTML = authors;
      })
      .catch(error => console.log(error));
  }

  

  const getNewQuote = document.getElementById('new-quote');

  getNewQuote.addEventListener('click', function () {
    getQuote();
  });
  	getQuote();
});