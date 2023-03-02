/*-----------------------------SCROLL BACK ON TOP-------------------------------*/
// document.querySelector('a[href="#top"]').addEventListener('click', function(e) {
//   e.preventDefault();
//   var target = document.querySelector('#top');
//   var startPosition = window.pageYOffset;
//   var distance = target.getBoundingClientRect().top;
//   var duration = 800;
//   var startTime = null;

//   function animate(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     var timeElapsed = currentTime - startTime;
//     var run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) requestAnimationFrame(animate);
//   }

//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(animate);
// });
/*-----------------------------SCROLL BACK ON TOP-------------------------------*/

/*-----------------------------SMOOTH SCROLL-------------------------------*/
// const navLinks = document.querySelectorAll('nav ul li a');
// const sections = document.querySelectorAll('section');
// const navHeight = document.querySelector('nav').offsetHeight;

// navLinks.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();
//     const targetId = link.getAttribute('href');
//     const targetPosition = document.querySelector(targetId).offsetTop - navHeight;
//     window.scrollTo({
//       top: targetPosition,
//       behavior: 'smooth'
//     });
//   });
// });

// window.addEventListener('scroll', () => {
//   const currentPosition = window.pageYOffset;
//   sections.forEach(section => {
//     const sectionTop = section.offsetTop - navHeight;
//     const sectionHeight = section.clientHeight;
//     if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
//       navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${section.id}`) {
//           link.classList.add('active');
//         }
//       });
//     }
//   });
// });
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
    designerSPAN.style.transition = "margin-top 0.25s ease-in-out";
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

  var developerSPANWidth = developerSPAN.offsetWidth;

  developerSPAN.classList.toggle("clicked");

  if (developerSPAN.classList.contains("clicked")) {
    developerSPAN.style.marginTop = "-600px";
    developerInfo.style.marginTop = "-650px";
    developerInfo.style.width = developerSPANWidth + "px";
    developerInfo.style.display = "block";
    developerSPAN.style.transition = "margin-top 0.5s ease-in-out";
  } else {
    developerSPAN.style.marginTop = "0px";
    developerInfo.style.marginTop = "0px";
    developerInfo.style.display = "none";
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