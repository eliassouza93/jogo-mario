

const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const score = document.querySelector('.score')
const clouds = document.querySelector('.clouds')
const pular = document.querySelector('.pular')
const restart = document.querySelector('.restart')
restart.style.display = 'none'
   
    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`
    
            mario.style.animation = 'none'
            mario.style.bottom = `${pipePosition}px`
            
            clouds.style.display = 'none'
            mario.style.display = 'none'
            pipe.style.display = 'none'
            restart.style.display = 'block'
        
    
            mario.src = './img/game-over.png'
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'
           
            clearInterval(loop)
            var game = document.querySelector('.game-board')
            game.style.background ='black'
    
            var msg = document.querySelector('.msg')
            msg.style.border= '2px solid white';
            msg.style.padding = '20px'
            msg.style.color = 'white'
            msg.textContent = 'Fim de Jogo! ' + 'Total de Pontos: ' + conversaoNum

              
        }
    
    }, 10)

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 800);
}
restart.addEventListener('click',function() {
    window.location.reload(true);
 
})
 pular.addEventListener('click', jump)
     
 

/********************************************************** */
let num = 0
let conversaoNum = parseInt(num)

function Tempo() {
    cron = setInterval(() => {
        score.textContent = conversaoNum += 1
    }, 320)

}
Tempo()
 
/********************************************************** */

 
