/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Written by Man Yat CHU on 10 May 2021
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    "quote": "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
    "source": "Richard P. Feynman",
    "citation": "Surely You're Joking, Mr. Feynman!",
    "year": "1985"
  },
  {
    "quote": "All the time you're saying to yourself, 'I could do that, but I won't,' — which is just another way of saying that you can't.",
    "source": "Richard P. Feynman",
    "citation": "Surely You're Joking, Mr. Feynman!",
    "year": "1985"
  },
  {
    "quote": "So I have just one wish for you – the good luck to be somewhere where you are free to maintain the kind of integrity I have described, and where you do not feel forced by a need to maintain your position in the organization, or financial support, or so on, to lose your integrity. May you have that freedom.",
    "source": "Richard P. Feynman",
    "citation": "Surely You're Joking, Mr. Feynman!",
    "year": "1985"
  },
  {
    "quote": "I couldn't claim that I was smarter than sixty-five other guys--but the average of sixty-five other guys, certainly!",
    "source": "Richard P. Feynman",
    "citation": "Surely You're Joking, Mr. Feynman!",
    "year": "1985"
  },
  {
    "quote": "Of course, you only live one life, and you make all your mistakes, and learn what not to do, and that's the end of you.",
    "source": "Richard P. Feynman",
    "citation": "Surely You're Joking, Mr. Feynman!",
    "year": "1985"
  }
]

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){

  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array

  let randNum = Math.floor(Math.random() * 4.999);

  // 2. Use the random number variable and bracket notation
  // to grab a random object from the `quotes` array, and
  // store it in a variable

  let randEntry = quotes[randNum];

  // 3. Return the variable storing the random quote object

  return randEntry;
}


/***
 * `printQuote` function
***/
////////////////////////////////////////////////////////////////////////////////
// class notes: or use function expression const printQuote = function(){blah}
// function hoisted, function called must be after  function expression
// arrow function const printQuote = () =>{blah}
// function const getSquareArea = a => a**2;
// const person = {property1:"a", property2:"b"}
// for(let prop in person){console.log(prop)} -- print the properties.
// note that the values a and b are private.
// for(let prop in person){console.log(`${prop} ${person[prop]}$`)}
////////////////////////////////////////////////////////////////////////////////


function printQuote(){

  // 1. Create a variable that calls the getRandomQuote()
  // function

  let randomQuote = getRandomQuote();

  // 2. Create a variable that initiates your HTML string with
  // the first two <p></p> elements, their classNames,
  // and the quote and source properties, but leave off
  // the second closing `</p>` tag for now

  let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</p>"+ "<p class='source'>" + randomQuote.source;

  // 3. Use an if statement to check if the citation property
  // exists, and if it does, concatenate a <span></span>
  // element, appropriate className, and citation property
  // to the HTML string

  if(getRandomQuote().citation){
    PtoHTML1 += "<span class='citation'>" + getRandomQuote().citation +"</span>";
  }

  // 4. Use an if statement to check of the year property exists,
  // and if it does, concatenate a <span></span> element,
  // appropriate className, and year property to the HTML
  //string

  if(getRandomQuote().year){
    PtoHTML1 += "<span class='year'>" + getRandomQuote().year +"</span>";
  }

  // 5. After the two if statements, concatenate the closing </p>
  // tag to the HTML string

  PtoHTML1 += "</p>";

  // 6. set the innerHTML of the quote-box div to equal the
  // complete HTML string}

  document.getElementById("quote-box").innerHTML = PtoHTML1;
  
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);