/*-----------------------------SCROLL BACK ON TOP-------------------------------*/
function scrollBackOnTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/*-----------------------------SCROLL BACK ON TOP-------------------------------*/

/*-----------------------------SMOOTH SCROLL-------------------------------*/


/*-----------------------------SMOOTH SCROLL-------------------------------*/

/*-----------------------------TEXT FLOAT IN ANIMATION-------------------------------*/
function slideInFromLeft() {
  var titleBlock = document.getElementById("titleBlock");
  titleBlock.style.opacity = '0';
  titleBlock.style.transform = "translateX(-100%)";
  titleBlock.style.transition = "transform 2s ease";
  // opacity 2s ease

  setTimeout(() => {
  titleBlock.style.opacity = '1';
  titleBlock.style.transform = 'translateX(0)';
  }, 1700);
}

function slideInFromRight()  {
  var nameBlock = document.getElementById("nameBlock");
  nameBlock.style.opacity = '0';
  nameBlock.style.transform = 'translateX(100%)';
  nameBlock.style.transition = "transform 2s ease";

  setTimeout(() => {
    nameBlock.style.opacity = '1';
    nameBlock.style.transform = 'translateX(0)';
  }, 4000);
}

function textFloatAnimation() {
  slideInFromLeft();
  slideInFromRight();
  currentSlide(1);
}

/*-----------------------------TEXT FLOAT IN ANIMATION-------------------------------*/

/*-----------------------------CLICK ON DESIGNER-------------------------------*/
function displayDesignerInfo() {
  var designerSPAN = document.getElementById("designerSPAN");
  var designerInfo = document.getElementById("designerInfo");

  var imagePhotoshop = document.getElementById("imagePhotoshop");
  var imageBlender = document.getElementById("imageBlender");
  var imageBlenderAndPhotoshop = document.getElementById("imageBlenderAndPhotoshop");


  var designerSPANWidth = designerSPAN.offsetWidth;

  designerSPAN.classList.toggle("clicked");

  if (designerSPAN.classList.contains("clicked")) {
    designerSPAN.style.marginTop = "-600px";
    designerInfo.style.marginTop = "-650px";

    designerInfo.style.width = designerSPANWidth + "px";
    imagePhotoshop.style.width = designerSPANWidth + "px";
    imageBlender.style.width = designerSPANWidth + "px";
    imageBlenderAndPhotoshop.style.width = designerSPANWidth + "px";

    designerInfo.style.display = "block";
    designerSPAN.style.transition = "margin-top 0.5s ease-in-out";
  } else {
    designerSPAN.style.marginTop = "0px";
    designerInfo.style.marginTop = "0px";
    designerInfo.style.display = "none";
  }
}
/*-----------------------------CLICK ON DESIGNER-------------------------------*/

/*-----------------------------CLICK ON DEVELOPER-------------------------------*/
function displayDeveloperInfo() {
  var developerSPAN = document.getElementById("developerSPAN");
  var developerInfo = document.getElementById("developerInfo");

  var skillContainerForWidth = document.getElementById("skillContainerForWidth");

  var developerSPANWidth = developerSPAN.offsetWidth;

  developerSPAN.classList.toggle("clicked");

  if (developerSPAN.classList.contains("clicked")) {
    developerSPAN.style.marginTop = "-600px";
    developerInfo.style.marginTop = "-650px";

    developerInfo.style.width = developerSPANWidth + "px";
    skillContainerForWidth.style.width = developerSPANWidth + "px";
    
    developerInfo.style.display = "block";
    skillContainerForWidth.style.display = "block";
    
    developerSPAN.style.transition = "margin-top 0.5s ease-in-out";
  } else {
    developerSPAN.style.marginTop = "0px";
    developerInfo.style.marginTop = "0px";
    developerInfo.style.display = "none";
    skillContainerForWidth.style.display = "none";
  }
}
/*-----------------------------CLICK ON DEVELOPER-------------------------------*/

/*-----------------------------HOVER BOOKS-------------------------------*/
function booksOpen(image) {
  image.src = "../assets/kev/books/Books-Open-Cartoon.png";
}

function booksClosed(image) {
  image.src = "../assets/kev/books/Books-Closed-Cartoon.png";
}
/*-----------------------------HOVER BOOKS-------------------------------*/

/*-----------------------------HOVER WORK-------------------------------*/
function workNoError(image) {
  image.src = "../assets/kev/work/Work-NoError-Cartoon.png";
}

function workError(image) {
  image.src = "../assets/kev/work/Work-Error-Cartoon.png";
}
/*-----------------------------HOVER WORK-------------------------------*/

/*-----------------------------HOVER WORKOUT-------------------------------*/
function inhale(image) {
  image.src = "../assets/kev/workout/Workout-Exhale-Cartoon.png";
}

function exhale(image) {
  image.src = "../assets/kev/workout/Workout-Inhale-Cartoon.png";
}
/*-----------------------------HOVER WORKOUT-------------------------------*/

/*-----------------------------DESIGNER SLIDESHOW-------------------------------*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var line = document.getElementsByClassName("line");
  if(n > slides.length) {
    slideIndex = 1
  }
  if(n < 1) {
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < line.length; i++) {
    line[i].className = line[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  line[slideIndex - 1].className += " active";
}
/*-----------------------------DESIGNER SLIDESHOW-------------------------------*/





