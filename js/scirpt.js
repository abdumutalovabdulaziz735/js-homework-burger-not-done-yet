

const numbers =document.querySelector('.number-100'),
    span= document.querySelector('.raise');
    let hello = 0


function item() {
    span.innerHTML = hello
    if (hello < 100) {
        hello++
        
    }
    if(hello == 20){
    numbers.style = `color: red`
        span.style = `color: red`
    }
     if(hello == 40){
    numbers.style = `color: yellow`
        span.style = `color: yellow`
    }
     if(hello == 60){
    numbers.style = `color: green`
        span.style = `color: green`
    }
    if(hello == 80){
    numbers.style = `color: aqua`
        span.style = `color: aqua`
    }
    if(hello == 100){
    numbers.style = `color: black`
        span.style = `color: black`
    }

    setTimeout(() => {
        item()
    }, 100);
}
item()



const img1 =document.querySelector('.header__img'),
        cardimg =document.querySelectorAll('.card__img');



cardimg.forEach(item =>{
    item.addEventListener('click', ()=>{
        cardimg.forEach(i=>i.classList.remove('active'))
        item.classList.add('active')
         img1.src = item.src
    })
})
