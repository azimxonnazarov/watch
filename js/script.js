let min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    sec = document.querySelector('.s'),
    hourClock = document.querySelector('.hours'),
    minClock = document.querySelector('.minutes')

function clock () {
    let time = new Date()
    let seconds = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30
    console.log('наши секунды ' + seconds );  
    console.log('наши минуты ' + minutes );  
    console.log(`наши часы ${hours}`); 
    
    sec.style = `transform: rotate(${seconds}deg)`
    min.style = `transform: rotate(${minutes}deg)`
    hour.style = `transform: rotate(${hours}deg)`
    
    hourClock.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours 
    minClock.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    
    setTimeout(() => clock(), 1000)
    
}

// clock()

// setTimeout(() => {
//   console.log('hello');  
// },2000)



    
// рекурсия это когда функция вызывает саму себя


// let i = 0;

// function rek() {
//   console.log(i);
//   if(i < 100) {
//     i++
//     rek()
//   }  
// }
// rek()


let links = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem')

for(let i = 0; i < links.length;i++) {
  links[i].addEventListener('click', function (event) {
    event.preventDefault()
    for(let x = 0; x < links.length;x++){
      links[x].classList.remove('active')  
      tabs[x].classList.remove('active')
    }
    links[i].classList.add('active')
    tabs[i].classList.add('active')   
  })
}


console.log(links);



let stophours = document.querySelector('.stopwatch__hours'),
    stopMinutes = document.querySelector('.stopwatch__minutes'),
    stopSeconds = document.querySelector('.stopwatch__seconds'),
    stopBtn = document.querySelector('.stopwatch__btn'),
    span = document.querySelector('.tabsLink__span');


stopBtn.addEventListener('click', function() {
    if(this.innerHTML == 'start') {
      this.innerHTML = 'stop'
      span.classList.add('active')
      let i = 0;
      setTimeout(() => timer(this,i),1000)
    }else if(this.innerHTML == 'stop') {
      this.innerHTML = 'clear'
      span.classList.remove('active')
      span.classList.add('active_clear')
    }else {
      this.innerHTML = 'start'
      span.classList.remove('active_clear')
      stopSeconds.innerHTML = 0;
      stopMinutes.innerHTML = 0;
      stophours.innerHTML = 0;
    }
})    
    
    

function timer(btn, i) {
  if(btn.innerHTML == 'stop') {
    if(i == 59) {
      i = 0;
      stopSeconds.innerHTML = 0;
      if(stopMinutes.innerHTML == 59) {
        stopMinutes.innerHTML = 0;
        stophours.innerHTML++
      }else {
        stopMinutes.innerHTML++
      }
    }else {
      i++;
      stopSeconds.innerHTML = i
    }
    
    setTimeout(() => timer(btn,i), 1000)
  }
}

