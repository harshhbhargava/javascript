var teams = ['CSK','RCB','MI','PBKS','GT','LSG','DC','KKR','RR','SRH']

var h2 = document.querySelector('h2')
var btn = document.querySelector('button')

btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()*teams.length)

    h2.innerHTML = teams[num]
})