function revealOnScroll() {
    const elements = document.querySelectorAll('#reveal');

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // roda ao carregar;



function clickMenu(){ 
    const mostra = document.getElementById("mostrar");      

    if(mostra.style.display === "block"){
        mostra.style.display = "none";        
    } else {
        mostra.style.display = "block";
    }  
}

function mudoutamanho() {
    const mostra = document.getElementById("mostrar");

    if (window.innerWidth >= 768) {
        mostra.style.display = "flex";                      
    } else {                        
        mostra.style.display = "none";
    }
}

window.onload = mudoutamanho;
window.onresize = mudoutamanho;
