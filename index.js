const content = document.getElementById('elemento');
const respuesta = document.querySelector('#respuesta');
const boton = document.querySelector('#boton');
const botonTexto = document.querySelector('#botonTexto');
const imgPlus = document.createElement('img')
const imgMinus = document.createElement('img')


imgPlus.setAttribute('src', './assets/images/icon-plus.svg')
imgMinus.setAttribute('src', './assets/images/icon-minus.svg')


boton.append(imgPlus);

content.addEventListener('click', toggleClass);
content.addEventListener('mouseover', function() {
    botonTexto.setAttribute('style', 'color: #8c6991');
});

content.addEventListener('mouseout', function() {
    botonTexto.removeAttribute('style');
});

function toggleClass() {
    respuesta.classList.toggle('inactive');
    if (boton.contains(imgPlus)) {
        boton.removeChild(imgPlus);
        boton.append(imgMinus);
    } else {
        boton.removeChild(imgMinus);
        boton.append(imgPlus);
    }
}