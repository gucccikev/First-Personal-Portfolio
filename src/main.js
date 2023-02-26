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

document.getElementById("designer").onclick = function() {  

};  
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


/*-----------------------------HOVER ON TEXT-------------------------------*/
