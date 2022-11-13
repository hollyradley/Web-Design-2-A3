
///////////////// QUICK TIP 'TAB' /////////////////
let tab = document.querySelector('sl-tab');
let quickTip = document.querySelector('.quick-tip')


tab.addEventListener('click', event => {
    if (quickTip.style.display = "block"){
        quickTip.style.display = "none";
    }else {
        quickTip.style.display = "block";
    }
    });

///////////////// SPIRIT BUTTONS /////////////////

// grabbing the let's go button and listening for the user to click it
let vodkaButton = document.querySelector (".vodka-button");
let vodkaWrapper = document.querySelector (".wrapper-1");

let ginButton = document.querySelector (".gin-button");
let ginWrapper = document.querySelector (".wrapper-2");

let teqButton = document.querySelector (".tequila-button");
let teqWrapper = document.querySelector (".wrapper-3");

let rumButton = document.querySelector (".rum-button");
let rumWrapper = document.querySelector (".wrapper-4");

// making the button 'none' by diffult, but allow it to display when clicked

vodkaButton.addEventListener ('click', () => { 
    if (vodkaWrapper.style.display == "none"){
        vodkaWrapper.style.display = "block";
    }else {
        vodkaWrapper.style.display = "none";
    }
});

ginButton.addEventListener ('click', () => { 
    if (ginWrapper.style.display == "none"){
        ginWrapper.style.display = "block";
    }else {
        ginWrapper.style.display = "none";
    }
});

teqButton.addEventListener ('click', () => { 
    if (teqWrapper.style.display == "none"){
        teqWrapper.style.display = "block";
    }else {
        teqWrapper.style.display = "none";
    }
});

rumButton.addEventListener ('click', () => { 
    if (rumWrapper.style.display == "none"){
        rumWrapper.style.display = "block";
    }else {
        rumWrapper.style.display = "none";
    }
});



///////////////// COCKTAIL RECIPES /////////////////
let pornstarButton = document.querySelector (".next-button-1");
let showRecipeOne = document.querySelector (".recipe-1");

let cosmoButton = document.querySelector (".next-button-2");
let showRecipeTwo = document.querySelector (".recipe-2");

let elderflowerButton = document.querySelector (".next-button-3");
let showRecipeThree = document.querySelector (".recipe-3");

let grapefruitButton = document.querySelector (".next-button-4");
let showRecipeFour = document.querySelector (".recipe-4");

let margButton = document.querySelector (".next-button-5");
let showRecipeFive = document.querySelector (".recipe-5");

let palomaButton = document.querySelector (".next-button-6");
let showRecipeSix  = document.querySelector (".recipe-6");

let mojitoButton = document.querySelector (".next-button-7");
let showRecipeSeven  = document.querySelector (".recipe-7");

let daiquariButton = document.querySelector (".next-button-8");
let showRecipeEight  = document.querySelector (".recipe-8");


pornstarButton.addEventListener ('click', () => { 
    if (showRecipeOne.style.display == "none"){
        showRecipeOne.style.display = "block";
    }else {
        showRecipeOne.style.display = "none";
    }
});

cosmoButton.addEventListener ('click', () => { 
    if (showRecipeTwo.style.display == "none"){
        showRecipeTwo.style.display = "block";
    }else {
        showRecipeTwo.style.display = "none";
    }
});


elderflowerButton.addEventListener ('click', () => { 
    if (showRecipeThree.style.display == "none"){
        showRecipeThree.style.display = "block";
    }else {
        showRecipeThree.style.display = "none";
    }
});


grapefruitButton.addEventListener ('click', () => { 
    if (showRecipeFour.style.display == "none"){
        showRecipeFour.style.display = "block";
    }else {
        showRecipeFour.style.display = "none";
    }
});

margButton.addEventListener ('click', () => { 
    if (showRecipeFive.style.display == "none"){
        showRecipeFive.style.display = "block";
    }else {
        showRecipeFive.style.display = "none";
    }
});


palomaButton.addEventListener ('click', () => { 
    if (showRecipeSix.style.display == "none"){
        showRecipeSix.style.display = "block";
    }else {
        showRecipeSix.style.display = "none";
    }
});


mojitoButton.addEventListener ('click', () => { 
    if (showRecipeSeven.style.display == "none"){
        showRecipeSeven.style.display = "block";
    }else {
        showRecipeSeven.style.display = "none";
    }
});


daiquariButton.addEventListener ('click', () => { 
    if (showRecipeEight.style.display == "none"){
        showRecipeEight.style.display = "block";
    }else {
        showRecipeEight.style.display = "none";
    }
});


///////////////// COCKTAIL RECIPES /////////////////


let makeItButton = document.querySelector (".make-it-button");
let showStepOne = document.querySelector (".step-1");


makeItButton.addEventListener ('click', () => { 
    if (showStepOne.style.display == "none"){
        showStepOne.style.display = "block";
    }else {
        showStepOne.style.display = "none";
    }
});


let stepOneButton = document.querySelector (".next-step-1");
let showStepTwo = document.querySelector (".step-2");


stepOneButton.addEventListener ('click', () => { 
    if (showStepTwo.style.display == "none"){
        showStepTwo.style.display = "block";
    }else {
        showStepTwo.style.display = "none";
    }
});

let stepTwoButton = document.querySelector (".next-step-2");
let showStepThree = document.querySelector (".step-3");


stepTwoButton.addEventListener ('click', () => { 
    if (showStepThree.style.display == "none"){
        showStepThree.style.display = "block";
    }else {
        showStepThree.style.display = "none";
    }
});

let stepThreeButton = document.querySelector (".next-step-3");
let showDone = document.querySelector (".done");


stepThreeButton.addEventListener ('click', () => { 
    if (showDone.style.display == "none"){
        showDone.style.display = "block";
    }else {
        showDone.style.display = "none";
    }
});

///////////////// IMAGE GALLARY /////////////////

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image-slides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}