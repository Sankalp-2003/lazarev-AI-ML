function LocomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
LocomotiveAnimation();


function LoadingPageAnimation(){
  var tl = gsap.timeline()
    tl.from(".page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from(".page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from(".page1 h1, .page1 p, .page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
LoadingPageAnimation();

function navAnimation(){
  let nav = document.querySelector('.nav-p2');
nav.addEventListener('mouseenter',function(){
  gsap.to('.nav-bottom',{
    height:'23vh',
    duration:0.3
  })
  gsap.to('.nav-p2 h5',{
    delay:0.3,
    display:'block',
    opacity:1
  })
  gsap.from('.nav-p2 h5 span',{
    display:'block',
    x:'-7vw',
    duration:0.5,
    stagger:0.05
  })
})

nav.addEventListener('mouseleave',function(){
  gsap.to('.nav-bottom',{
    height:'0vh',
    duration:0.5
  })
  gsap.to('.nav-p2 h5',{
    display:'none',
    duration:0.02,
    opacity:0
  })
})
}
navAnimation();

function page2Animation(){
  let relem = document.querySelectorAll('.right-elem');

relem.forEach(function(elem){
  elem.addEventListener('mouseenter',function(){
    gsap.to(elem.childNodes[3],{
      opacity:1,
      scale:1
    })
  })
  elem.addEventListener('mouseleave',function(){
    gsap.to(elem.childNodes[3],{
      opacity:0,
      scale:0
    })
  })
  elem.addEventListener('mousemove',function(dets){
    gsap.to(elem.childNodes[3],{
      x:dets.x - elem.getBoundingClientRect().x-50,
      y:dets.y - elem.getBoundingClientRect().y-150
    })
  })
})
}
page2Animation();

function page3Animation(){
  let page3Center = document.querySelector('.page3-center');
let video = document.querySelector('.page3 video');

page3Center.addEventListener('click',function(){
  video.play();
  gsap.to(video,{
    transform:'scaleX(1) scaleY(1)',
    opacity:1,
    borderRadius:0
  })
})

video.addEventListener('click',function(){
  video.pause();
  gsap.to(video,{
    transform:'scaleX(0.7) scaleY(0)',
    opacity:0,
    borderRadius:'30px'
  })
})
}
page3Animation()

function page4Animation(){
  let Rsec = document.querySelectorAll('.sec-right');

Rsec.forEach(function(elem){
  elem.addEventListener('mouseenter',function(){
    elem.childNodes[3].style.opacity = 1;
    elem.childNodes[3].play();
  })
  elem.addEventListener('mouseleave',function(){
    elem.childNodes[3].style.opacity = 0;
    elem.childNodes[3].load();
  })
})
}
page4Animation();

function page6Animation(){
  gsap.from('.btm6-part2 h4',{
    x:0,
    duration:1,
    scrollTrigger:{
      trigger:'.btm6-part2 h4',
      scroller:'.main',
      start:'top 80%',
      end:'top 10%',
      scrub:true
    }
  })
  gsap.from('.btm6-part3 h4',{
    x:0,
    duration:1,
    scrollTrigger:{
      trigger:'.btm6-part3 h4',
      scroller:'.main',
      start:'top 80%',
      end:'top 10%',
      scrub:true
    }
  })
  gsap.from('.btm6-part4 h4',{
    x:0,
    duration:1,
    scrollTrigger:{
      trigger:'.btm6-part4 h4',
      scroller:'.main',
      start:'top 80%',
      end:'top 10%',
      scrub:true
    }
  })
}
page6Animation();


