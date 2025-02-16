document.addEventListener('DOMContentLoaded', () => {
    const faqElements = document.querySelectorAll('.FAQ-element');
    const boton = document.querySelectorAll('.FAQ-button');

    boton.forEach((element) => {
        const imgPlus = document.createElement('img')
        imgPlus.setAttribute('src', './assets/images/icon-plus.svg');
        imgPlus.setAttribute('class', 'plus');
        imgPlus.setAttribute('alt', 'plus icon');
        element.append(imgPlus);
        const imgMinus = document.createElement('img')
        imgMinus.setAttribute('src', './assets/images/icon-minus.svg');
        imgMinus.setAttribute('class', 'minus minus-inactive');
        imgMinus.setAttribute('alt', 'minus icon');
        element.append(imgMinus);
    });
    faqElements.forEach((element) => {
        const faqQuestion = element.querySelector('p');
        const faqAnswer = element.querySelector('div');
        const faqButton = element.querySelector('button');
        element.addEventListener('click', function () {
            toggleClass(faqAnswer)
            const imgPlus = faqButton.querySelector('img.plus');
            const imgMinus = faqButton.querySelector('img.minus-inactive');
            const imgMinusActive = faqButton.querySelector('img.minus');
            if (imgMinus) {
                imgMinus.classList.remove('minus-inactive');
                imgPlus.classList.add('plus-inactive');
            } else {
                imgPlus.classList.remove('plus-inactive');
                imgMinusActive.classList.add('minus-inactive');
            }
        });
        //? si llamo a la funcion directamente se ejecuta inmediatamente, asi que tengo q llamar al toggle como funcion anonima

        element.addEventListener('mouseover', function () {
            faqQuestion.setAttribute('style', 'color: #8c6991');
        });
        element.addEventListener('mouseout', function () {
            faqQuestion.removeAttribute('style');
        });
    });
});

function toggleClass(respuesta) {
    respuesta.classList.toggle('inactive');
}