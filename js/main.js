const getQuote = () => {
    fetch("https://the-dune-api.herokuapp.com/quotes")
    .then(response => response.json())
    .then(quotes =>{
        const quote = quotes[0];
        const quoteDescription = document.createElement("p"); 
        quoteDescription.textContent = quote.quote;
        const quoteElement = document.getElementById("dune");
        quoteElement.innerHTML = ""; 

        quoteElement.appendChild(quoteDescription); 
    })
    .catch(err => {
        console.error(err.message);
    });
};

document.getElementById("getButton").addEventListener("click", getQuote);