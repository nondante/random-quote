let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
const reload = document.querySelector("img");

var quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["There is no charm equal to tenderness of heart.", "Jane Austen"],
    ["If you cannot do great things, do small things in a great way.", "Napoleon Hill"],
    ["Independence is happiness.", "Susan B. Anthony"],
    ["Keep your face always toward the sunshine - and shadows will fall behind you.", "Walt Whitman"],
    ["Love has no age, no limit; and no death.", "John Galsworthy"],
    ["Life is like riding a bicycle. To keep your balance, you must keep moving.", "Albert Einstein"],
    ["Life is short, and it is up to you to make it sweet.", "Sarah Louise Delany"],
    ["It is always the simple that produces the marvelous.", "Amelia Barr"],
    ["The power of imagination makes us infinite.", "John Muir"],
    ["Try to be a rainbow in someone’s cloud.", "Maya Angelou"]
  ]
  let randomElement = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[randomElement][0];
  author.innerHTML = quotes[randomElement][1];
  $(quote).hide();
  $(quote).fadeIn(2000);
  $(quote).delay(2000);
  $(quote).fadeOut(1000);


  var timer = setInterval(function() { // Show them sequentially
    let randomElement = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[randomElement][0];
    author.innerHTML = quotes[randomElement][1];

    $(quote).hide();
    $(quote).fadeIn(2000);
    $(quote).delay(3000);
    $(quote).fadeOut(1000);
}, 6000); // Every 1000 ms





function generateQuote(){
    let randomElement = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[randomElement][0];
    author.innerHTML = quotes[randomElement][1];
 }
reload.addEventListener("click", generateQuote);
