let intro = document.querySelector('.intro');
let logo = document.querySelector('.logoheader');
let logospan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        logospan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx + 1)*600)
        });

        setTimeout(()=>{
            logospan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');   
                }, (idx + 1) * 60)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2600)
    })
})