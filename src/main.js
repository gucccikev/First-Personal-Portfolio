function onLoadFunction() {
  slideInFromLeft();
  slideInFromRight();
  currentSlide(1);
  // disableClick();

  displayAboutMeInfo();
  
  mindTextHideAtStart();
  codeTextHideAtStart();
  bodyTextHideAtStart();

  animateFirstSection();
  animateSecondSection();
  addSectionEventListeners();
}
/*-----------------------------SCROLL BACK ON TOP-------------------------------*/
function scrollBackOnTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/*-----------------------------SCROLL BACK ON TOP-------------------------------*/

// // method to animate the first section to slide up and reveal the second section
// function animateFirstSection() {
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > 0) {
//     document.getElementById('section1').style.transform = 'translateY(-100%)';
//   }
// }

// // method to animate the second section to slide left and reveal the third section
// function animateSecondSection() {
//   document.getElementById('section2').style.transform = 'translateX(-100%)';
//   document.getElementById('section3').style.transform = 'translateX(-100%)';
// }

// // method to add event listeners to the sections
// function addSectionEventListeners() {
//   // add scroll event listener to the window to animate the first section
//   window.addEventListener('scroll', animateFirstSection);
  
//   // add wheel event listener to the second section to animate the third section
//   document.getElementById('section2').addEventListener('wheel', function(event) {
//     if (event.deltaX > 0) {
//       animateSecondSection();
//     }
//   });
// }

/*
// method to initialize the website
function initWebsite() {
  // set height and overflow properties on html and body elements
  document.documentElement.style.height = '100%';
  document.body.style.height = '100%';
  document.body.style.overflow = 'hidden';
  
  // add event listeners to the sections
  addSectionEventListeners();
}

// call the initWebsite method when the window loads
window.addEventListener('load', initWebsite);
*/

/*-----------------------------DISABLE RIGHT CLICK-------------------------------*/
// function disableClick(){
//   document.onclick=function(event){
//   if (event.button == 2) {
//   alert('Right Click Message');
//   return false;
//     }
//   }
// }

// var message = "function disabled";

// function rtclickcheck(keyp){ if (navigator.appName == "Netscape" && keyp.which == 3){ alert(message); return false; }

// if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) { alert(message); return false; } }

// document.onmousedown = rtclickcheck;
/*-----------------------------DISABLE RIGHT CLICK-------------------------------*/


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
/*-----------------------------TEXT FLOAT IN ANIMATION-------------------------------*/

function displayAboutMeInfo() {
  var aboutMeSPAN = document.getElementById("aboutMeSPAN");

  var aboutMeInfo = document.getElementById("designerInfo");
  var aboutTitles = document.getElementById("aboutTitles");
  var aboutImages = document.getElementById("aboutImages");
  var aboutTexts = document.getElementById("aboutTexts");

  var mindText = document.getElementById("mindText");
  var codeText = document.getElementById("codeText");
  var bodyText = document.getElementById("bodyText");

  var aboutMeSPANWidth = aboutMeSPAN.offsetWidth;
  
  aboutMeInfo.style.width = aboutMeSPANWidth + "px";
  aboutTitles.style.width = aboutMeSPANWidth + "px";
  aboutImages.style.width = aboutMeSPANWidth + "px";
  aboutTexts.style.width = aboutMeSPANWidth + "px";

  mindText.style.width = aboutMeSPANWidth + "px";
  codeText.style.width = aboutMeSPANWidth + "px";
  bodyText.style.width = aboutMeSPANWidth + "px";
}

/*-----------------------------CLICK ON DESIGNER-------------------------------*/
function displayDesignerInfo() {
  var designerSPAN = document.getElementById("designerSPAN");
  var designerInfo = document.getElementById("designerInfo");

  var imagePhotoshop = document.getElementById("imagePhotoshop");
  var imageBlender = document.getElementById("imageBlender");
  var imageBlenderAndPhotoshop = document.getElementById("imageBlenderAndPhotoshop");

  var designerArrow = document.getElementById("designerArrow");

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
    designerArrow.style.display = "none";
  } else {
    designerSPAN.style.marginTop = "0px";
    designerInfo.style.marginTop = "0px";
    designerInfo.style.display = "none";
    designerArrow.style.display = "block";
    designerArrow.style.transition = "margin-top 0.5s ease-in-out";
  }
}
/*-----------------------------CLICK ON DESIGNER-------------------------------*/

/*-----------------------------CLICK ON DEVELOPER-------------------------------*/
function displayDeveloperInfo() {
  var developerSPAN = document.getElementById("developerSPAN");
  var developerInfo = document.getElementById("developerInfo");

  var skillContainerForWidth = document.getElementById("skillContainerForWidth");

  var developerArrow = document.getElementById("developerArrow");

  var developerSPANWidth = developerSPAN.offsetWidth;

  developerSPAN.classList.toggle("clicked");

  if (developerSPAN.classList.contains("clicked")) {
    developerSPAN.style.marginTop = "-600px";
    developerInfo.style.marginTop = "-650px";

    developerInfo.style.width = developerSPANWidth + "px";
    skillContainerForWidth.style.width = developerSPANWidth + "px";
    
    developerInfo.style.display = "block";
    skillContainerForWidth.style.display = "block";
    developerArrow.style.display = "none";
    
    developerSPAN.style.transition = "margin-top 0.5s ease-in-out";
  } else {
    developerSPAN.style.marginTop = "0px";
    developerInfo.style.marginTop = "0px";
    developerInfo.style.display = "none";
    skillContainerForWidth.style.display = "none";
    developerArrow.style.display = "block";
    developerArrow.style.transition = "margin-top 0.5s ease-in-out";
  }
}
/*-----------------------------CLICK ON DEVELOPER-------------------------------*/

/*-----------------------------HOVER BOOKS-------------------------------*/
function mindTextHideAtStart() {
  const mindText = document.getElementById('mindText');

  mindText.style.visibility = 'hidden';
  mindText.style.opacity = '0';
}

function booksOpen(image) {
  image.src = "../assets/kev/books/Books-Open-Cartoon.png";
  const mindText = document.getElementById('mindText');
  mindText.style.visibility = 'visible';
  mindText.style.opacity = '1';
}

function booksClosed(image) {
  image.src = "../assets/kev/books/Books-Closed-Cartoon.png";
  const mindText = document.getElementById('mindText');
  mindText.style.visibility = 'hidden';
  mindText.style.opacity = '0';
}
/*-----------------------------HOVER BOOKS-------------------------------*/

/*-----------------------------HOVER WORK-------------------------------*/
function codeTextHideAtStart() {
  const codeText = document.getElementById('codeText');

  codeText.style.visibility = 'hidden';
  codeText.style.opacity = '0';
}

function workError(image) {
  image.src = "../assets/kev/work/Work-Error-Cartoon.png";
  const codeText = document.getElementById('codeText');
  codeText.style.visibility = 'visible';
  codeText.style.opacity = '1';
}

function workNoError(image) {
  image.src = "../assets/kev/work/Work-NoError-Cartoon.png";
  const codeText = document.getElementById('codeText');
  codeText.style.visibility = 'hidden';
  codeText.style.opacity = '0';
}
/*-----------------------------HOVER WORK-------------------------------*/

/*-----------------------------HOVER WORKOUT-------------------------------*/
function bodyTextHideAtStart() {
  const bodyText = document.getElementById('bodyText');

  bodyText.style.visibility = 'hidden';
  bodyText.style.opacity = '0';
}

function exhale(image) {
  image.src = "../assets/kev/workout/Workout-Inhale-Cartoon.png";
  const bodyText = document.getElementById('bodyText');
  bodyText.style.visibility = 'visible';
  bodyText.style.opacity = '1';
}

function inhale(image) {
  image.src = "../assets/kev/workout/Workout-Exhale-Cartoon.png";
  const bodyText = document.getElementById('bodyText');
  bodyText.style.visibility = 'hidden';
  bodyText.style.opacity = '0';
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





