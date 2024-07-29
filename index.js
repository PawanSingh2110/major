function page1Animation() {
  gsap.from(".shape", {
    y: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
  });

  gsap.to(".page1", {
    scrollTrigger: {
      trigger: ".shape",
      scroller:"body",
     start: "top 50%",
      end: "top 20%",
      scrub: true,
     
   
    },
    x: -1000,
    y: -100,
    scale: 0,
    delay: 4,
    duration: 6,
  });
}
page1Animation();

function page2Animation() {

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            scroller:"body",
            start: "top 40%",
            end: "top top",
            
       
            
            
            

            
            
           
            onEnter: () => {
                gsap.to("#navbar", { display: "flex", opacity: 1, duration: 0.5 });
                gsap.to("#nav-cont", { display: "block", opacity: 1, duration: 0.5 });
                gsap.to("#para", { display: "block", opacity: 1, duration: 0.5 });
                gsap.to("#icons", { display: "flex", opacity: 1, duration: 0.5 });
                gsap.to("#card", { display: "flex", opacity: 1, duration: 0.5 });
            },
            onLeaveBack: () => {
                gsap.to("#navbar", { display: "none", opacity: 0, duration: 0.5 });
                gsap.to("#nav-cont", { display: "none", opacity: 0, duration: 0.5 });
                gsap.to("#para", { display: "none", opacity: 0, duration: 0.5 });
                gsap.to("#icons", { display: "none", opacity: 0, duration: 0.5 });
                gsap.to("#card", { display: "none", opacity: 0, duration: 0.5 });
            }
        },
    })

  


    tl.from(".page2 nav",{
       y:-40,
       opacity:0,
       
        delay: 0.5,
        duration: 1,
    })
    tl.from(".page2 nav a",{
       opacity:0,
        delay: 1,
        duration: 2,
        stagger:0.5
    },"-=1")

    
    tl.from(".page2 .nav-cont",{
        
        x:100,
        opacity:0,
        delay: 1.5,
        duration: 1,
        stagger:0.5,
        // ease: "elastic.out(1, 0.3)"
    },"-=4")

    tl.from(".page2 .para",{
        
        x:40,
        opacity:0,
        delay: 2,
        duration: 1,
        stagger:0.5,
        // ease: "elastic.out(1, 0.3)"
    },"-=3")
    tl.from(".page2 .icons i",{
        
        y:40,
        opacity:0,
        delay: 2,
        duration: 1,
        stagger:0.3,
       
    },"-=3")

    tl.from(".page2 .circle",{
        
        y:300,
        scale:0,
        opacity:0,
        delay: 1.5,
        duration: 1,
        stagger:0.5,
        // ease: "elastic.out(1, 0.3)"
    },"-=4")
    tl.from(".page2 .innercircle",{
        
        y:100,
        scale:0,
        opacity:0,
        delay: 1.5,
        duration: 1,
        stagger:0.5,
        // ease: "elastic.out(1, 0.3)"
    },"-=3")

    tl.from(".page2 .card img",{
        
        y:100,
        opacity:0,
        delay: 2,
        duration: 1,
        stagger:0.3,
       
    },"-=3")
    tl.from(".page2 .card p",{
        
        y:100,
        opacity:0,
        delay: 2,
        duration: 1,
        stagger:0.3,
       
    },"-=3")

    


}

page2Animation();




function page3Animation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3",
      start: "top 30%",
      end: "top 10%",
      scrub: true,
    
    }
  });

  tl.from("#page3-img", { scale: 0.8, opacity: 0, duration: 2 })
  .from(".page-cont", { y: -100, opacity: 0, duration: 1 }, "-=0.5")
  .from(".page-cont1", { y: -100, opacity: 0, duration: 1 }, "-=0.5")
  .from(".cont-img", { y: -100, opacity: 0, duration: 1 }, "-=0.5")
  .from(".cont-img1", { y: -100, opacity: 0, duration: 1 }, "-=0.5")
  .from(".cont-p", { y: -100, opacity: 0, duration: 1 }, "-=0.5")
  .from(".cont-p1", { y: -100, opacity: 0, duration: 1 }, "-=0.5")

  .from(".left-down-cont", { x: -300, opacity: 0, duration: 1 }, "-=1")
}

page3Animation();
    
    
   



