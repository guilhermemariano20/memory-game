const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

// Captura evento quando alguem digita algo no imput para ativar o botão de login;
const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled'); // Ablita o botão apos usar 3 caracteres
        return;
    }

    button.setAttribute('disabled', ''); // desabilita quando tem menos de 3 caracteres

}

const handleSubmit = (event) => {
    event.preventDefault(); //previne o comportamento padrao do envio do formulario

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);