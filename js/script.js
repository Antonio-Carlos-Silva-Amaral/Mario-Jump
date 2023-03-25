const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const game = document.querySelector('.gameoo')
const nuvens = document.querySelector('.clouds')

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump')
    },500);

}

const recarga = () =>{
    location.reload()
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPositon = +window.getComputedStyle(mario).bottom.replace('px','')

    if(pipePosition <= 110 && pipePosition > 0 && marioPositon < 80 ){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPositon}px`

        mario.src = './img/gameo.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'

        game.src = './img/gameover.png'
        game.style.display = 'block'

        nuvens.src = './img/clouds.png'
        nuvens.style.animation = 'none'
        nuvens.style.display = 'none'

        document.addEventListener("click",recarga)
        document.addEventListener("touchstart",recarga)
        

        clearInterval(loop)
    } 

},10);


document.addEventListener('keydown',jump)
document.addEventListener("touchstart",jump)