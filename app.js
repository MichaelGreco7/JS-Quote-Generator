// Target Button
const quoteBtn = document.querySelector("#quoteBtn");

// Target Quote Author
const quoteAuthor = document.querySelector("#quoteAuthor");

//  Target Quote Button
const quote = document.querySelector("#quote");

// Create event listener for our button with callback function
quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  // console.log(number);
  // We select quote author/quote which is equal to our array
  // Then we get random number/index
  // From this random number/index we get a name/quote
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}

const quotes = [
  {
    name: "Marcus Aurelius",
    quote: "Be tolerant with others and strict with yourself."
  },
  {
    name: "Marcus Aurelius",
    quote:
      "You don’t have to turn this into something. It doesn’t have to upset you."
  },
  {
    name: "Marcus Aurelius",
    quote:
      "To live a good life: We have the potential for it. If we learn to be indifferent to what makes no difference."
  },
  {
    name: "Marcus Aurelius",
    quote:
      "It’s silly to try to escape other people’s faults. They are inescapable. Just try to escape your own."
  },
  {
    name: "Marcus Aurelius",
    quote:
      "Think of yourself as dead. You have lived your life. Now take what’s left and live it properly."
  },
  {
    name: "Marcus Aurelius",
    quote:
      "Because most of what we say and do is not essential. Ask yourself at every moment, “Is this necessary?"
  },
  {
    name: "Marcus Aurelius",
    quote:
      "The impediment to action advances action. What stands in the way becomes the way"
  },
  {
    name: "Marcus Aurelius",
    quote:
      "It’s unfortunate that this has happened. No. It’s fortunate that this has happened and I’ve remained unharmed."
  },
  {
    name: "Marcus Aurelius",
    quote:
      "You’re better off not giving the small things more time than they deserve."
  },
  {
    name: "Marcus Aurelius",
    quote: "If it is not right, do not do it, if it is not true, do not say it."
  },
  {
    name: "Marcus Aurelius",
    quote: "Waste no more time arguing what a good man should be. Be one."
  },
  {
    name: "Marcus Aurelius",
    quote:
      "It’s all in how you perceive it. You’re in control. You can dispense with misperception at will, like rounding the point."
  },
  {
    name: "Marcus Aurelius",
    quote:
      "It’s a disgrace in this life when the soul surrenders first while the body refuses to."
  }
];
