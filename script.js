let nav = document.querySelector('nav');
nav.addEventListener('mouseenter',function(){
  gsap.to('.nav-bottom',{
    height:'23vh',
    duration:0.5
  })
  gsap.to('.nav-p2 h5',{
    delay:0.5,
    display:'block'
  })
  gsap.from('.nav-p2 h5 span',{
    delay:0.5,
    x:'-7vw',
    stagger:0.04
  })
})

nav.addEventListener('mouseleave',function(){
  gsap.to('.nav-bottom',{
    height:'0vh',
    duration:0.5
  })
  gsap.to('.nav-p2 h5',{
    display:'none',
    duration:0.02
  })
})