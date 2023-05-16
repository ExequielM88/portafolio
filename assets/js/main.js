function headerhtml(){

    const headerHTML = document.getElementById("pp");

        window.addEventListener("scroll", function() {
          if (window.pageYOffset > 100) {
            headerHTML.classList.add("nombre_header_show");
          } else {
            headerHTML.classList.remove("nombre_header_show");
          }
        });

};

const textElement = document.getElementById('nombre-parrafo');
const text = ' desarrollador web';
let index = 0;
let timer;

function typeText() {
  textElement.textContent += text[index];
  index++;
  if (index === text.length) {
    clearInterval(timer);
    setTimeout(resetText, 2000);
  }
}



// Iniciar el mecanografiado del texto cuando se carga la página
window.addEventListener('load', () => {
  timer = setInterval(typeText, 100);
});





function main (){
    headerhtml();
    typeText()
    resetText()
};


main();