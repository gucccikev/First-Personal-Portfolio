/*-----------------------------SCROLL BACK ON TOP-------------------------------*/
document.querySelector('a[href="#top"]').addEventListener('click', function(e) {
  e.preventDefault();
  var target = document.querySelector('#top');
  var startPosition = window.pageYOffset;
  var distance = target.getBoundingClientRect().top;
  var duration = 800;
  var startTime = null;

  function animate(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animate);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animate);
});
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

/*-----------------------------CLICK ON DESIGNER-------------------------------*/
function displayDesignerInfo() {
    var designerSPAN = document.getElementById("designerSPAN");
		var designerInfo = document.getElementById("designerInfo");

    designerSPAN.classList.toggle("clicked");
		designerSPAN.style.marginTop = "-600px";
		designerInfo.style.display = "block";

}
/*-----------------------------CLICK ON DESIGNER-------------------------------*/

/*-----------------------------CLICK ON DEVELOPER-------------------------------*/
function displayDeveloperInfo() {
    var developerSPAN = document.getElementById("developerSPAN");
		var developerInfo = document.getElementById("developerInfo");

    developerSPAN.classList.toggle("clicked");
		developerSPAN.style.marginBottom = "-600px";
		developerInfo.style.display = "block";
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