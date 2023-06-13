const minutosIA = document.querySelector ('#minutos')
const segundosIA = document.querySelector ('#segundos')
const milisegundosIA = document.querySelector ('#milisegundos')
const btnStart = document.querySelector ('#btnStart')
const btnResert = document.querySelector ('#btnResert')
const btnContinue = document.querySelector ('#btnContinue')
const btnPause = document.querySelector ('#btnPause')



let interval = 0
let minutos = 0
let segundos = 0
let milisegundos = 0
let isPaused = false

btnStart.addEventListener('click', start)
btnPause.addEventListener('click', pauseTempo)
btnContinue.addEventListener('click', continueTempo)
btnResert.addEventListener('click', resertar)






function start(){
 
    interval = setInterval(()=>{

        if(!isPaused){

        milisegundos +=  10
        if(milisegundos == 1000){
        segundos += 1
        milisegundos = 0
          }
        if(segundos == 60){
        minutos +=1
        segundos = 0
          }

          milisegundosIA.textContent = consertarZero(milisegundos)
          segundosIA.textContent = consertarZero(segundos)
          minutosIA.textContent = consertarZero(minutos)

       }
    },10)

   btnStart.style.display='none'
   btnPause.style.display='inline-block'

}


function pauseTempo(){
 

    isPaused = true
    btnPause.style.display='none'
    btnContinue.style.display='inline-block'


}



function continueTempo(){
 

    isPaused = false
    btnContinue.style.display='none'
    btnPause.style.display='inline-block'


}




function resertar(){


    minutos = 0
    segundos = 0
    milisegundos = 0

    clearInterval(interval)
    
    isPaused = false
    btnPause.style.display='none'
    btnContinue.style.display='none'
    btnStart.style.display='inline-block'
    
    milisegundosIA.textContent = consertarZero(milisegundos)
    segundosIA.textContent = consertarZero(segundos)
    minutosIA.textContent = consertarZero(minutos)


  

}


function consertarZero(time){

    if(time<10){
        return `0${time}`
    }else{
        return time
    }
}










// function resertar(){

    
//     let interval = 00
//     let minutos = 00
//     let segundos = 00
//     let milisegundos = 000
//     let isPaused = false

//           milisegundosIA.textContent = milisegundos
//           segundosIA.textContent = segundos
//           minutosIA.textContent = minutos

// }