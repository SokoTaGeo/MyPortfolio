const btnHamburger = document.querySelector(".hamburger");
const menuPanel = document.querySelector(".menu-panel");
const menuLinks = document.querySelectorAll('.menu-panel');
const frameImage = document.querySelector('#frame');
const images = ['1.webp','2.webp','3.jpeg','4.jpeg','5.webp'];


let currentUmageIndex = 0;

btnHamburger.addEventListener('click', ()=>{
    menuPanel.classList.toggle('active');
});

document.addEventListener('click', (event)=>{
    if (!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)){
        menuPanel.classList.remove('active');
    }
})

//
menuLinks.forEach((link)=>{
    link.addEventListener('click', (event)=>{
            menuPanel.classList.remove('active');
    })
})
//
frameImage.addEventListener('click', ()=>{
    currentUmageIndex++;
    if (currentUmageIndex >=5){
        currentUmageIndex = 0;
    }

    frameImage.src = 'images/' + images[currentUmageIndex];
});


