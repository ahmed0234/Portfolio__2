import './style.css'


import {gsap} from 'gsap'

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
// LENIS SMOOTH SCROLLING CODE

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)





const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


document.addEventListener('DOMContentLoaded' , function() {
  // Shery.imageEffect("#profileimg", {
  //   style: 4, //Select Style
  //   config: {"uColor":{"value":false},"uSpeed":{"value":0.86,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":2.44,"range":[0,5]},"uFrequency":{"value":1.3,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":1,"range":[1,2]},"aspect":{"value":0.8351240521408444},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  // });
  
  
  // Shery.makeMagnet(".nleft" /* Element to target.*/, {
  //   //Parameters are optional.
  //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  //   duration: 1,
  // });
  // Shery.makeMagnet(".nright" /* Element to target.*/, {
  //   //Parameters are optional.
  //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  //   duration: 1,
  // });


  
  let herotext= `I Create Digital Future.`
  
  let actualherotxt = document.querySelector('#herotitletxt')
  
  for (let char of herotext) {
    // Create a new span element
    let span = document.createElement('span');
    // Set the inner text of the span to the current character
    span.textContent = char;
    // Append the span to the h1 element
    actualherotxt.appendChild(span);
  }
  
  // HERO TEXT ANIMATION
  
  gsap.from('#herotitletxt span', {
    opacity: 0,
    y: 20,
    duration: 0.2,
    delay: 0.2,
    ease: 'power4.out',
    stagger: 0.1
  })
  
  gsap.from('.heroright .p', {
    opacity: 0,
    y:30,
    duration :1,
    delay: 0.2,
    stagger: 0.2
  })
  
  gsap.from('nav div' , {
    opacity: 0,
    y:-30,
    duration :1,
    delay: 0.2,
    stagger: 0.2
  })
  
  
  gsap.from('#profileimg', {
    opacity: 0,
    y:50,
    duration :1,
    delay: 0.2,
  
  })
  gsap.from('.heroright button', {
    opacity: 0,
    y:50,
    duration :1,
    delay: 0.2,
  
  })


  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.SKILLS',
      start: "top 80%",
    }
  })

  tl.from('.skillLine', {
    width: 0,
    duration: 1.2,
    ease: 'power4.out',
    stagger: 0.3
  })
  
  
  
})




// ===============================================================================NAV ================


  const hamburger = document.querySelector('#humbargur');
  const nav = document.getElementById('nav');
  const closeBtn = document.getElementById('close-btn');

  hamburger.addEventListener('click', function() {
      gsap.to(nav, {
          duration: 0.5,
          x: '-100%',
          ease: 'power2.out'
      });
      console.log(`clicked`);
  });

  closeBtn.addEventListener('click', function() {
      gsap.to(nav, {
          duration: 0.5,
          x: '100%',
          ease: 'power2.in'
      });
  });



  document.querySelectorAll('.mobile__nav__links').forEach((link, idx)=>{
    link.addEventListener('click', ()=>{
      gsap.to(nav, {
        duration: 0.5,
        x: '100%',
        ease: 'power2.in'
    });
    })
  })





















