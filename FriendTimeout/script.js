var h2 = document.querySelector('h2')
var btn = document.querySelector('button')

var flag = 0

btn.addEventListener('click',function(){
    if(flag === 0){
        h2.style.color = 'orange'
        h2.innerHTML = 'Adding...'

        setTimeout(() => {
            h2.innerHTML = 'Added'
            h2.style.color = 'green'
            btn.innerHTML = 'Remove friend'
            flag = 1
        }, 2000);
    }
    else{
        h2.style.color = 'orange'
        h2.innerHTML = 'Removing...'

        setTimeout(() => {
            h2.innerHTML = 'Stranger'
            h2.style.color = 'red'
            btn.innerHTML = 'Add friend'
            flag = 0
            
        }, 2000);
    }

})