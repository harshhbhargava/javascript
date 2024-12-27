var btn = document.querySelector('button')
var h3 = document.querySelector('.fd')

var flag = 0

btn.addEventListener('click',function(){
    if(flag == 0){
        h3.innerHTML = 'friends'
        h3.style.color = 'green'
        btn.innerHTML = 'Remove'
        btn.style.backgroundColor = 'gray'
        flag = 1
    }
    else{
        h3.innerHTML = 'Stranger'
        btn.innerHTML = 'Add Friend'
        btn.style.backgroundColor = 'green'
        h3.style.color = 'black'
        flag = 0

    }

})