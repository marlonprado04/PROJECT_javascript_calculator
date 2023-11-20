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
let operation = "null";

// Função para zerar o display
function resetDisplay() {
  display.textContent = "0";
}

// Função para zerar o displayLog
function resetDisplayLog() {
  displayLog = 0;
}

// Função para realizar a operação de acordo com tecla clicada
function realizeOperation(operation, value1, value2) {
  switch (operation) {
    case "key__c":
      resetDisplay();
      resetDisplayLog();
      break;
    case "key__sum":
      if (displayLog === 0) {
        displayLog = parseInt(display.textContent);
        console.log(this.operation);
        console.log(operation);
        this.operation = operation;
        resetDisplay();
      } else {
        displayLog += parseInt(display.textContent);
        display.textContent = displayLog.toString();
      }
      console.log(displayLog);
      break;
    case "key__subtraction":
      if (displayLog === 0) {
        displayLog = parseInt(display.textContent);
        resetDisplay();
      } else {
        displayLog -= parseInt(display.textContent);
        display.textContent = displayLog.toString();
      }
      console.log(displayLog);
      break;
  }
}

// Varrendo teclas de função em busca de cliques
functionKeys.forEach((key) => {
  // Adicionando verificação de click para cada tecla
  key.addEventListener("click", () => {
    // Chamando função de operação e passando como parâmetro o ID
    realizeOperation(key.id);
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
