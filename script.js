let increment = 0

let show = document.querySelector('.show');
let cuerpo = document.querySelector('.container');

document.addEventListener('click', (e)=>{

    if(e.target.matches('#decrease')){
        increment--;
        show.innerHTML = increment;
        cuerpo.style.backgroundColor= `rgba(234,${increment},237,0.9)`;
        console.log(increment)
    }

    else if(e.target.matches('#reset')){
        increment = 0;
        show.innerHTML = increment;
        cuerpo.style.backgroundColor= `rgba(${increment},200,237,0.9)`;
    }

    else if(e.target.matches('#increase')){
        increment++;
        show.innerHTML = increment;
        cuerpo.style.backgroundColor= `rgba(234,200,${increment},0.9)`;
    }
})
