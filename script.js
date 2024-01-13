const left = document.querySelector('.img1')
const right = document.querySelector('.img2')

let rand1 =  Math.floor(Math.random()*6)+1
let rand1path = `./images/dice${rand1}.png` 

let rand2 =  Math.floor(Math.random()*6)+1
let rand2path = `./images/dice${rand2}.png`

// left.addEventListener('click', function(){   
    left.setAttribute('src',rand1path)
// })
// right.addEventListener('click', function(){
    right.setAttribute('src',rand2path)
// })


const container = document.querySelector('h1')
if(rand1==rand2){
    container.innerHTML = 'Tie'
    
}
else if(rand1>rand2){
    container.innerHTML = 'Player 1 wins'
}
else {
    container.innerHTML = 'Player 2 wins'
}

