// Armazenando os botões e display para poder modificar / dar sentido a eles
const display = document.querySelector(".calculator__display");
const numberKeys = document.querySelectorAll(".calculator__button.num");
const functionKeys = document.querySelectorAll(".calculator__button.fun");
let displayLog = 0;
let operation = null;
let number1 = 0; // Variável para o primeiro número da operação
let number2 = 0; // Variável para o segundo número da operação
let history;

// Função para zerar o display
function resetDisplay() {
  display.textContent = "0";
}

// Função para zerar o displayLog
function resetDisplayLog() {
  displayLog = 0;
}

// Função para adicionar histórico na tela
function addHistory(n1, n2, operationSymbol) {
  // Se não criada, cria uma div de histórico
  if (!history) {
    // Cria elemento de div dentro da variável history
    history = document.createElement("div");
    // Adiciona elemento criado no body
    document.body.appendChild(history);
    history.innerHTML +='<h3> Histórico: </h3>'
  }

  // Adiciona conteúdo à div sem substituir o conteúdo anterior
  history.innerHTML += '<p>' + n1 + operationSymbol + n2 + " = " + '</p>';
}

// Função principal que será chamada quando uma tecla for clicada
function calculator(clickedKey) {
  switch (clickedKey) {
    // No caso da tecla pressionada ser a C, faz reset dos valores
    case "key__c":
      resetDisplay();
      resetDisplayLog();
      operation = null;
      number1 = 0;
      number2 = 0;
      break;
    case "key__plus_minus":
      if (Number(display.textContent) !== 0) {
        display.textContent = Number(display.textContent) * -1;
      }
      break;
    case "key__backspace":
      if (
        (Number(display.textContent) !== 0) &
        (display.textContent.length > 1)
      ) {
        display.textContent = display.textContent.slice(0, -1);
        console.log("if backspace");
      } else {
        display.textContent = "0";
        console.log("else backspace");
      }
      break;
    // No caso de ser qualquer uma das demais operações...
    case "key__sum":
    case "key__subtract":
    case "key__multiply":
    case "key__divide":
    case "key__potention":
      // Verifica se uma operação já está em andamento e realiza a operação pendente
      if (operation !== null) {
        realizeOperation();
        operation = null; // Limpa a operação pendente após mostrar o resultado
        break;
      }
      // Senão, armazena o valor digitado na variável 1
      number1 = parseFloat(display.textContent);
      operation = clickedKey;
      resetDisplay();
      break;
    case "key__equals":
      if (operation !== null) {
        realizeOperation();
      }
      break;
    default:
      break;
  }
}

// Função para realizar a operação de acordo com operação armazenada em memória
function realizeOperation() {
  // Escolhe a partir da variável "operation" de acordo com a operação
  switch (operation) {
    case "key__sum":
      number2 = parseFloat(display.textContent);
      displayLog = number1 + number2;
      display.textContent = displayLog.toString();
      console.log(number1 + " + " + number2 + " = " + displayLog);
      addHistory(number1, number2, "+");
      break;
    case "key__subtract":
      number2 = parseFloat(display.textContent);
      displayLog = number1 - number2;
      display.textContent = displayLog.toString();
      console.log(number1 + " - " + number2 + " = " + displayLog);
      addHistory(number1, number2, "-");
      break;
    case "key__multiply":
      number2 = parseFloat(display.textContent);
      displayLog = number1 * number2;
      display.textContent = displayLog.toString();
      console.log(number1 + " * " + number2 + " = " + displayLog);
      addHistory(number1, number2, "*");
      break;
    case "key__divide":
      number2 = parseFloat(display.textContent);
      if (number2 !== 0) {
        displayLog = number1 / number2;
        display.textContent = displayLog.toString();
      } else {
        displayLog = "Error"; // Tratamento de divisão por zero
        display.textContent = displayLog.toString();
      }
      console.log(number1 + " / " + number2 + " = " + displayLog);
      addHistory(number1, number2, "/");
      break;
    case "key__potention":
      number2 = parseFloat(display.textContent);
      displayLog = number1 ** number2;
      display.textContent = displayLog.toString();
      console.log(number1 + " ** " + number2 + " = " + displayLog);
      addHistory(number1, number2, "**");
      break;
    default:
      break;
  }
}
// Varrendo teclas de função em busca de cliques
functionKeys.forEach((key) => {
  // Adicionando verificação de click para cada tecla
  key.addEventListener("click", () => {
    // Chamando função de operação e passando como parâmetro o ID
    calculator(key.id);
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
    }
    // Senão, verifica se o número é menor que o limite do display
    else if (display.textContent.length < 19) {
      // Concatenando o valor do botão clicado ao lado do valor já existente
      display.textContent += key.textContent;
    }
  });
});
