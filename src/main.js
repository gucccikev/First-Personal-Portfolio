import * as THREE from 'three'

import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


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

/*function MyParallaxComponent() {
  return (
    <Parallax pages={3}>
      <ParallaxLayer offset={0} speed={1}>
        <h1>Layer 1</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1}>
        <h1>Layer 2</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1}>
        <h1>Layer 3</h1>
      </ParallaxLayer>
    </Parallax>
  );
}

ReactDOM.render(<MyParallaxComponent />, document.getElementById(''));*/