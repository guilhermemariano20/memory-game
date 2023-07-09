const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'meeseeks',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'scroopy'
]

const createElement = (tag, className) => {  // function para criar os elementos da minha div;
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length === 20) {
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi ${timer.innerHTML}s`);
    }
}


const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
    
    } else {
        setTimeout(() => {

        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard = '';
        secondCard = '';
    }, 500);

    }
}

const revealCard = ({ target }) => {  //function para revelar as cartas e verificar se são iguais

    if(target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if(firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === '')  {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards ();
    }

}

const creatCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard); //captura o evento de click nas cartas
    card.setAttribute('data-character', character); //ira criar um atributo para as cartas

    return card;
}

const loadGame = () => { // funcao para carregar o game;

    const duplicateCharacters = [...characters, ...characters,];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    duplicateCharacters.forEach((character) => {

        const card = creatCard(character);
        grid.appendChild(card);
    });
}

const startTimer = () => {    //funcao para iniciar o timer

    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000);

}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
}



