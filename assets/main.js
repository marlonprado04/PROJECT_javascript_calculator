// Etapas:
// 1. Zerar display com botão C
// 2. Zerar e adicionar números ao clicar neles
// 3. Zerar display e armazenar valor ao selecionar operação
// 4. Executar operação ao clicar no igual

// Armazenando os botões e display para poder modificar / dar sentido a eles
const display = document.querySelector(".calculator__display");
const numberKeys = document.querySelectorAll(".calculator__button.num");
const functionKeys = document.querySelectorAll(".calculator__button.fun");
let displayLog = 0;

// Função para zerar adisplay
function resetDisplay() {
  display.textContent = "0";
}

// Varrendo teclas de função
functionKeys.forEach((key) => {
  // Adicionando verificação de click para cada tecla
  key.addEventListener("click", () => {
    // Se o id da tecla for "key__c", reseta o display
    if (key.id == "key__c") {
      resetDisplay();
    }
  });
});

// Varrendo as teclas numéricas
numberKeys.forEach((key) => {
  // Adicionando verificador de click para cada botão numérico
  key.addEventListener("click", () => {
    // Verificando se display está com valor 0
    if (Number(display.textContent) === 0) {
      // Se sim, passando valor do botão clicado no momento
      display.textContent = key.textContent;
    } else {
      // Se não, concatenando o valor do botão clicado ao lado do valor já existente
      display.textContent += key.textContent;
    }
  });
});
