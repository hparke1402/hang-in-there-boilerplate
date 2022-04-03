// query selector variables go here 👇
var mainImage = document.querySelector(".poster-img");
var mainTitle = document.querySelector(".poster-title");
var mainQuote = document.querySelector(".poster-quote");

var randomButton = document.querySelector(".show-random");
var randomImage = document.querySelector(".poster-img");
var randomQuote = document.querySelector(".poster-quote");
var randomTitle = document.querySelector(".poster-title");

var makeYourOwnButton = document.querySelector(".show-form");
var mainPoster = document.querySelector(".main-poster");
var posterForm = document.querySelector(".poster-form");

var savedPostersButton = document.querySelector(".show-saved");
var mySavedPosters = document.querySelector(".saved-posters");

var takeMeBackButton = document.querySelector(".show-main");
var backToMainButton = document.querySelector(".back-to-main");

var showMyPosterButton = document.querySelector(".make-poster");
var imageInput = document.querySelector("#poster-image-url");
var titleInput = document.querySelector("#poster-title");
var quoteInput = document.querySelector("#poster-quote");

var saveThisPosterButton = document.querySelector(".save-poster");

var savedGrid = document.querySelector(".saved-posters-grid");



// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;



// event listeners go here 👇
window.addEventListener("load", generateRandomPoster);
window.addEventListener("load", loadRandomTitle);
window.addEventListener("load", loadRandomQuote);

randomButton.addEventListener("click", generateRandomPoster);

makeYourOwnButton.addEventListener("click", showForm);

savedPostersButton.addEventListener("click", showSavedPosters);

takeMeBackButton.addEventListener("click", takeMeBack);

backToMainButton.addEventListener("click", backToMain);

showMyPosterButton.addEventListener("click", createNewPoster);

saveThisPosterButton.addEventListener("click", addToSavedPosters);




// functions and event handlers go here 👇

function loadRandomImage() {
  mainImage.src=`${images[getRandomIndex(images)]}`;
}

function loadRandomTitle() {
  mainTitle.innerText= `${titles[getRandomIndex(titles)]}`;
}

function loadRandomQuote() {
  mainQuote.innerText=`${quotes[getRandomIndex(quotes)]}`;
}

function generateRandomPoster() {
  var imgSrc = images[getRandomIndex(images)];
  var quote = quotes[getRandomIndex(quotes)];
  var title = titles[getRandomIndex(titles)];
  randomImage.src = imgSrc;
  randomQuote.innerText = quote;
  randomTitle.innerText = title;
  currentPoster = new Poster(imgSrc, title, quote);
  displayNewlyCreatedPoster(imgSrc, title, quote);
}

function showForm() {
  posterForm.classList.remove("hidden");
  mainPoster.classList.add("hidden");
}

function showSavedPosters() {
  mainPoster.classList.add("hidden");
  mySavedPosters.classList.remove("hidden");
}

function takeMeBack() {
  posterForm.classList.add("hidden");
  mainPoster.classList.remove("hidden");
}

function backToMain() {
  mySavedPosters.classList.add("hidden");
  mainPoster.classList.remove("hidden");
}

function createNewPoster() {
  event.preventDefault()
  var imageSrc = imageInput.value
  var title = titleInput.value
  var quote = quoteInput.value
  currentPoster = new Poster(imageSrc, title, quote)
  images.push(imageSrc)
  titles.push(title)
  quotes.push(quote)
  displayNewlyCreatedPoster(imageSrc, title, quote);
  takeMeBack();
}

function displayNewlyCreatedPoster(imageSrc, title, quote) {
  mainImage.src = `${imageSrc}`
  mainTitle.innerText = `${title}`
  mainQuote.innerText = `${quote}`
}

function addToSavedPosters() {
  var posterSaved = savedPosters.find(function(poster) {
    return posterComparator(poster, currentPoster);
  })
  if (!posterSaved) {
    savedPosters.push(currentPoster);

  var gridHTML = "";
  for (i = 0; i< savedPosters.length; i++) {
    var poster = savedPosters[i];
    gridHTML += `<div class="mini-poster">
       <img src="${poster.imageURL}" alt="${poster.title}">
       <h2>${poster.title}</h2>
       <h4>${poster.quote}</h4>
     </div>`
  }
  savedGrid.innerHTML = gridHTML;
  }
}

function posterComparator(posterA, posterB) {
  return (
    posterA && posterB &&
    posterA.imgSrc === posterB.imgSrc &&
    posterA.quote === posterB.quote &&
    posterA.title === posterB.title
  )
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
