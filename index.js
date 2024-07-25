var tl = gsap.timeline()


gsap.from(".page1 div",{
    scrollTrigger:".page1",
    y: 200,
    opacity: 0,
    duration: 1,
    delay:0.5
})


tl.from(".page2 .nav  ",{
    y : -20,
    opacity: 0,
    duration: 0.8,
    delay:1,
    stagger:0.3,
})




tl.from(".page2 .nav a ",{
    y : -20,
    opacity: 0,
    duration: 0.5,
    delay:0.5,
    stagger:0.3,
})








tl.from(".page2 .nav i ",{
    y : -20,
    opacity: 0,
    duration: 0.5,
    delay:0.5,
    stagger:0.3,
})

tl.from(".page2 .nav  h1 ",{
    y : -30,
    opacity: 0,
    duration: 0.5,
    delay:0.5,
    stagger:0.3,
})

gsap.from(".page2 .nav-cont  ",{
    x : -100,
    opacity: 0,
    duration: 3,
    delay:4,
    
})
gsap.from(".page2 .para  ",{
    x : 100,
    opacity: 0,
    duration: 3.5,
    delay:5,
    
})
gsap.from(".page2 .icons i  ",{
    x : 100,
    opacity: 0,
    duration: 3.5,
    delay:5,
    stagger:0.3,
    
})

gsap.from(".page2 .circle  ",{
    y : 100,
    scale: 0.1,
    opacity: 0,
    duration: 3,
    delay:4,
    
})

tl.from(".page2 .box  ",{
    y : 100,
    scale: 1,
    opacity: 0,
    duration: 1,
    delay:1,
    
})

gsap.from(".page2 .conner ",{
    y : -40,
    scale: 1,
    opacity: 0,
    duration: 5.3,
    delay:5.3,
    
})




gsap.from(".page2 .conner1 ",{
    y : -40,
    scale: 1,
    opacity: 0,
    duration: 5.3,
    delay:5.3,
    
})
tl.from(".page2 .box img ",{
    y : -40,
    scale: 1,
    opacity: 0,
    duration: 1,
    delay:1,
    
})
tl.from(".page2 .box p ",{
    y : 40,
    scale: 1,
    opacity: 0,
    duration: 1,
    delay:1,
    
})








