//CALCULADORA >:[

const display = document.getElementById("display");
const themeButton = document.getElementById("buttonTheme");
const historico = document.getElementById("historico");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const expression = display.value;
        const result = eval(expression);
        display.value = result;

        salvarHistorico(`${expression} = ${result}`);
        mostrarHistorico();
    } catch (error) {
        console.error("Erro no cálculo:", error);
        display.value = "Erro";
    }
}

function toggleTheme() {
    const isLight = document.body.classList.toggle("light-theme");
    if (themeButton) {
        const icon = themeButton.querySelector("i");
        if (icon) {
            icon.classList.toggle("bi-sun", isLight);
            icon.classList.toggle("bi-circle-half", !isLight);
        }
    }
}

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.body.classList.add("light-theme");
    const icon = themeButton?.querySelector("i");
    if (icon) {
        icon.classList.add("bi-sun");
        icon.classList.remove("bi-circle-half");
    }
}

function salvarHistorico(calculo) {
    let historico = JSON.parse(localStorage.getItem("historico")) || [];
    
    historico.push(calculo);
    
    localStorage.setItem("historico", JSON.stringify(historico));
}

function mostrarHistorico() {
    let historico = JSON.parse(localStorage.getItem("historico")) || [];
    console.log("Histórico carregado:", historico);
    
    let lista = document.getElementById("historico");
    lista.innerHTML = "";

    historico.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
}

function limparHistorico() {
    localStorage.removeItem("historico");
    mostrarHistorico();
}

document.addEventListener("DOMContentLoaded", mostrarHistorico);