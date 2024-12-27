var btn = document.querySelector('button')
var h3 = document.querySelector('h3')
var progress = document.querySelector('.progress')
var a = 0

btn.addEventListener('click',function(){
    var b = setInterval(function(){
        a++
        h3.innerHTML = a + '%'
        progress.style.width = a + '%'
    },30)
    setTimeout(function(){
        clearInterval(b)
        btn.style.pointerEvents = 'none'
        btn.innerHTML = 'DOWNLOADED'
        btn.style.opacity = 0.4
    },3000)
})