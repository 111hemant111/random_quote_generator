/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
Developed by Hemant Kuruva.
******************************************/


//In addition to the 'Exceeds' grade features, the code carries an additional feature of preventing recurring quotes being printed one after the other.

var prevQuoteIndex; //Stores index of the previous quote to prevent repetition of quotes.
var interval1; //setInterval() id
var quotes = [ //Array of quote objects.
    {
        quote: 'The adventure of life is to learn. The purpose of life is to grow. The nature of life is to change.',
        source: 'William Arthur Ward',
        year: 1958,
        tags: ['life', 'philosophy', 'motivation', 'change']
    },
    
    {
        quote: 'He who is untrue to his own cause cannot command the respect of others.',
        source: 'Albert Einstein',
        tags: ['life', 'philosophy', 'motivation']
    },
    
    {
        quote: 'Every saint has a past, and every sinner has a future.',
        source: 'Oscar Wilde',
        year: 1891,
        tags: ['life', 'philosophy', 'mistakes', 'change']
    },
    {
        quote: 'Challenges are what makes life interesting. Overcoming them is what makes life beautiful.',
        source: 'Joshua Marine',
        tags: ['life', 'hardships', 'motivation', 'beautiful']
    },
    {
        quote: 'For him who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his very mind is greatest enemy.',
        source: 'Lord Krishna',
        citation: 'Bhagawad Gita 6:6',
        tags: ['life', 'philosophy', 'motivation', 'hinduism', 'religion']
    },
    {
        quote: 'The greatest loss is what dies inside us while we live.',
        source: 'Norman Cousins',
        tags: ['life', 'philosophy', 'regrets']
    }
];

console.log(quotes); //Test
printQuote(); //A quote is displayed when page loads for the first time.

function printQuote() //Function to retrieve and print a random quote.
{   
    window.clearInterval(interval1); //Clears setInterval() for quote refresh
    interval1 = window.setInterval(printQuote, 20000); //Prints a new quote every 20 seconds - If idle.
 
    var quotePicked = getRandomQuote(); //Randomly selected quote.
    
    var quoteHTML = ''; //String that stores HTML code to print the quote and other properties like source, citation &c.
    quoteHTML += '<p class="quote">' + quotePicked.quote + '</p>' + '<p class="source"> ' + quotePicked.source;
    if (quotePicked.citation !== undefined) //If citation is present.
    {
        quoteHTML += '<span class="citation"> ' + quotePicked.citation + '</span>'; //Citation concatenated to HTML string
    } 
    
    if (quotePicked.year !== undefined) //If the year is present.
    {
        quoteHTML += '<span class="year"> ' + quotePicked.year + '</span>'; //Year concatenated to HTML string
    } 
    quoteHTML += '</p>'; //Closing paragraph tag for HTML string
    quoteHTML += '<p class="tags"><i>#' + quotePicked.tags.join(' #') + '</i></p>'; //Concatenating tags to be displayed. Added 'tags' class.
    
    randomBgColor(); //Function call to randomly change the background.
    
    document.getElementById("quote-box").innerHTML = quoteHTML; //Provide HTML string to the <div> tagged with "quote-box".
}

function getRandomQuote() //Returns a randomly picked quote objet
{
    var quoteIndex = getRandQuoteIndex(quotes.length); //Returns a random quote index.
    //Loop to prevent repetition
    while (prevQuoteIndex === quoteIndex) //Will loop until a new quote isn't picked that doesn't match the previous one.
        {   
            quoteIndex = getRandQuoteIndex(quotes.length);
        }
    console.log(quoteIndex); //Test repetition.
    prevQuoteIndex = quoteIndex; //Updating prevQuoteIndex
    return quotes[quoteIndex]; //Returns a complete quote object to calling function
}

function getRandQuoteIndex(length) //Function to pick and return a random quote index 
{
    return (Math.floor(Math.random()*length)); //Returns an index of randomly picked quote object
}

function randomBgColor() {//Function definition to randomly change the background.
    
    var a = Math.floor(Math.random() * 200); //Using 200, not 256 --> To have darker background colors --> Good contrast with white font.
    var b = Math.floor(Math.random() * 200);
    var c = Math.floor(Math.random() * 200);
    var bgColor = "rgb(" + a + "," + b + "," + c + ")"; //String to store rgb combination
    console.log(bgColor); //Test
  
    document.body.style.background = bgColor; //DOM background style property
    }

document.getElementById('loadQuote').addEventListener("click", printQuote, false); //Event listener - Activated when loadQuote Button is pressed.
