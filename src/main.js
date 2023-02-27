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

/*-----------------------------CLICK ON TEXT-------------------------------*/

// document.getElementById("designerSPAN").onclick = function() {  

// };  
/*-----------------------------------------------------------------------*/
// document.getElementById("designerSPAN").onclick = function() {  
//   moveTextUp();
// };  

// function moveTextUp() {
//   console.log("testttt");
// }
/*-----------------------------------------------------------------------*/
// const designerSPAN = document.getElementById("designerSPAN");

// designerSPAN.addEventListener("click", function() {
//   moveTextUp();
// });

// function moveTextUp() {
//   console.log("testttt");
// }
/*-----------------------------CLICK ON TEXT-------------------------------*/
function displayDesignerInfo() {
  
}

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
