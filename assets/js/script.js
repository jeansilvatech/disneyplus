// abas
const emBreve = document.querySelector(".em-breve");
const maisPopulares = document.querySelector(".mais-populares");
const starPlus = document.querySelector(".star-plus");

// cards
const breve = document.querySelector(".breve");
const populares = document.querySelector(".populares");
const mais = document.querySelector(".mais");

const nav = document.querySelector(".nav");
const btnAssine = document.querySelector(".assine");
const logoNav = document.querySelector(".logo-nav");

emBreve.style.borderBottom = '5px solid white';
emBreve.addEventListener('click', ()=>{
    emBreve.style.borderBottom = '5px solid white';
    maisPopulares.style.borderBottom = '5px solid transparent';
    starPlus.style.borderBottom = '5px solid transparent';
    breve.style.display = 'flex';
    populares.style.display = 'none';
    mais.style.display='none';
})
maisPopulares.addEventListener('click', ()=>{
    maisPopulares.style.borderBottom = '5px solid white';
    emBreve.style.borderBottom = '5px solid transparent';
    starPlus.style.borderBottom = '5px solid transparent';
    populares.style.display = 'flex';
    breve.style.display = 'none';
    mais.style.display='none';
})
starPlus.addEventListener('click', ()=>{
    starPlus.style.borderBottom = '5px solid white';
    maisPopulares.style.borderBottom = '5px solid transparent';
    emBreve.style.borderBottom = '5px solid transparent';
    mais.style.display= 'flex';
    populares.style.display = 'none';
    breve.style.display = 'none';
})

document.addEventListener('scroll', function(){
    var posicaoScroll = window.pageYOffset;
    if(posicaoScroll >= 700){
      nav.style.backgroundColor = '#040714';
      nav.style.transition = '900ms';
      logoNav.style.visibility = 'visible';
      btnAssine.style.visibility= 'visible';

    }else{
        nav.style.backgroundColor = 'transparent';
        logoNav.style.visibility = 'hidden';
        btnAssine.style.visibility= 'hidden';
    }
})