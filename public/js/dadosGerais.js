
altera_dados_gerais = document.getElementById('alterarDadosGerais')
confirma_alteracao_dados_gerais = document.getElementById('confirmaAlteracaoDadosGerais')

inputsGerais = document.querySelectorAll('#formHeaderXML div input')


altera_dados_gerais.onclick = () => {
    altera_dados_gerais.classList.add("is-hidden")
    confirma_alteracao_dados_gerais.classList.remove("is-hidden")
    console.log('clicado no altera dados gerais')
    inputsGerais.forEach(input => {
        input.disabled = false
    });
}

confirma_alteracao_dados_gerais.onclick = () => {
    altera_dados_gerais.classList.remove("is-hidden")
    confirma_alteracao_dados_gerais.classList.add("is-hidden")
    console.log('clicado no confirma alteração dados gerais')
    inputsGerais.forEach(input => {
        input.disabled = true
    });
}
