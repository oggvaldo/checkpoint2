// Botão para mudar o tema

const html = document.querySelector("html");
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  html.classList.toggle("dark-mode");
});

// Botão modal

let btn = document.getElementById("btn");
let span = document.getElementsByClassName("close")[0];


function openModal(mn) {
  let modal = document.getElementById(mn);
  
  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "Block";
  
  // Quando clicar a tecla 'esc' do teclado fecha o modal
window.addEventListener("keydown", function (e) {
  if (e.keyCode == 27 && modal.style.display == "block") {
    modal.style.display = "none";
  }
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

  // Quando o usuário clica em (x) o modal fica display: none
  span.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });


}

// Link do modal: https://codepen.io/chomikoo/pen/oWWapq
