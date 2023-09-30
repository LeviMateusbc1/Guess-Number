"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  // Fazendo o modal aparecer removendo a classe q escondia(hidden)
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  // adiciona a classe hidden, significa que quando clicar de novo, no botao de fechar irá esconder de  novo o código
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  // This function give us which key was pressed in the keyboard, if we console only  console.log(e);
  //Will give a=us a lot of information, but with e.key will return us only the key that was pressed

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    //Using the keydown in order to when click escape on keyboar we close the window, calling closeModal
    //The logic this was if escape was pressed or isnt hidden the modal, we will colse the modal
  }
});
