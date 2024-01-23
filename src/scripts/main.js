document.addEventListener('DOMContentLoaded', function(){
const buttons = document.querySelectorAll('[data-tab-button]');

    //seleciono todas as div que possuem o atributo
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;// com isso consigo pegar o tamanho de um elemento


    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;
        if(posicaoAtual < alturaHero){
            ocultaElementosDoHeader();
        }else{
            exibeElementosDoHeader();
        }
    })

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--active');
            
        })
    }
    for(let i = 0; i< questions.length; i++ ){
        questions[i].addEventListener('click', abreuOuFechaResposta);
    }
})

function abreuOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);


}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--active');
    }

}

function escondeTodasAbas(){
    const tabsContainer =  document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--active');
    }
}

function ocultaElementosDoHeader(){
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader(){
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}