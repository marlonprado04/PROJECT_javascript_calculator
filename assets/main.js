// Etapas:
// 1. Zerar display com botão C
// 2. Zerar e adicionar números ao clicar neles
// 3. Zerar display e armazenar valor ao selecionar operação
// 4. Executar operação ao clicar no igual

// Armazenar os botões e display para poder modificar / dar sentido a eles
const display = document.querySelector(".calculator__display");
const numberKeys = document.querySelectorAll(".calculator__button.num");
const functionKeys = document.querySelectorAll(".calculator__button.fun");
let displayLog = 0;

// Função zera adisplay
function resetDisplay() {
  display.textContent = "0";
}

function selectOperation(operation, value) {
  switch (operation)
}

// Varre os botões
numberKeys.forEach((key) => {
  // Adiciona verificador de click para cada botão
  key.addEventListener("click", () => {
    // Verifica se display esá com valor 0
    if (Number(display.textContent) === 0) {
      // Se sim, passa valor do botão clicado
      display.textContent = key.textContent;
    } else {
      // Se não, concatena o botão clicado ao lado
      display.textContent += key.textContent;
    }
  });
});

functionKeys.forEach((key) => {});
