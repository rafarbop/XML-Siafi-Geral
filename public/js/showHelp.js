
// document.getElementById().onmouse
listLabelDadosGerais = document.querySelectorAll('#label_dados_gerais label i')
listLabelDadosGerais.forEach(element => {
    element.onmouseenter = () => {
        element.firstElementChild.classList.remove('is-hidden')
    }
    element.onmouseleave = () => {
        element.firstElementChild.classList.add('is-hidden')
    }
});