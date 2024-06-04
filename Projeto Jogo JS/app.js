

const elementosEscolhas = document.querySelectorAll(".opcao");
let jogadorOpt = "";

window.jogar = () => {
    if (jogadorOpt === '') {
        alert('Por favor, selecione uma opção!');
        return;
    }

    const choices = ['pedra', 'papel', 'tesoura'];
    const pcChoice = choices[Math.floor(Math.random() * choices.length)];
    document.querySelector(".lance-pc").innerHTML = `<img id="lance-pc" src="imagens/${pcChoice}.jpg" alt="resultado pc">`


    if (jogadorOpt === pcChoice) {
        result = 'Empate!';
    } else if (
        (jogadorOpt === 'pedra' && pcChoice === 'tesoura') ||
        (jogadorOpt === 'tesoura' && pcChoice === 'papel') ||
        (jogadorOpt === 'papel' && pcChoice === 'pedra')
    ) {
        result = 'Você ganhou!';
    } else {
        result = 'Você perdeu!';
    }

    document.querySelector("#resultado").innerHTML = `${result}`
};

for (let i = 0; i < elementosEscolhas.length; i++) {
    elementosEscolhas[i].addEventListener("click", function(t){
        // Resetar a opacidade de todas as opções
        elementosEscolhas.forEach(el => el.style.opacity = 0.3);
        
        // Definir a opacidade da opção selecionada para 1
        t.target.style.opacity = 1;
        jogadorOpt = t.target.getAttribute("opt");
    });
}

