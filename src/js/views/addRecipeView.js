import View from "./View.js";
import icons from "url:../../img/icons.svg";

class addRecipeView extends View {
  _parentElement = document.querySelector(".upload");
  _message = "Recipe was succesfullt uploaded 🥳";

  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");

  constructor() {
    super();
    this._addHandlerShowModal();
    this._addHandlerHideModal();
  }
  toggleModal() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerShowModal() {
    this._btnOpen.addEventListener("click", this.toggleModal.bind(this));
  }

  _addHandlerHideModal() {
    this._btnClose.addEventListener("click", this.toggleModal.bind(this));
    this._overlay.addEventListener("click", this.toggleModal.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new addRecipeView();
