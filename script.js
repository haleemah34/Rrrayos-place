const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover',function(e) {
    span.classList.add(`animated`, `rubberBand`)
}))
spans.forEach(span => span.addEventListener('mouseout',function(e) {
        span.classList.remove(`animated`, `rubberband`)
}))
    
const htmlBar= document.querySelector('.bar-html')
const cssBar= document.querySelector('.bar-css')
const jsBar= document.querySelector('.bar-javascript')
const reactBar= document.querySelector('.bar-react')

var t1= new Timelinelite()

t1.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`},{width: `calc(90% - 6px)`, ease: power4.easeOut})
  .fromTo(cssBar, .75, {width: `calc(0% - 6px)`},{width: `calc(95% - 6px)`, ease: power4.easeOut})
  .fromTo(jsBar, .75, {width: `calc(0% - 6px)`},{width: `calc(75% - 6px)`, ease: power4.easeOut})
  .fromTo(reactBar, .75, {width: `calc(0% - 6px)`},{width: `calc(70% - 6px)`, ease: power4.easeOut})

const contoller = new scrollMagic.Controller()
const scene = new scrollMagic.Scene({
triggerElement: '.skills',
triggerHook: 0
})
.setTween(t1)
.addTo(contoller)

