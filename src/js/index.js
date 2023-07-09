// Objetivo 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder vereficar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');

// passo 2 - adcionar a classe selecionada que o usuario passar o cursor do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', ( )=> {

        if(window.innerWidth < 450 ) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // passo 3 - vereficar se já existe um personagem selecionado, se sim, devemos remover a seleção dele

        removerSelecaoDoPersonagem();
        personagem.classList.add('selecionado' );

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        
        //passo 1 -pegar o elemento do personagem grande pra adicionar as informações nele
         alterarImagemPersonagemSelecionado(personagem);

        // passo 3 - Alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);

        // Passo 4 - alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem);
    })
})
function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    //Passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

