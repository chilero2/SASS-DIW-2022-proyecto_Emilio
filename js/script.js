const buttons = document.getElementById("btn");
const items = document.getElementById("items");

const btnNav = document.getElementById("toggle");
const nav = document.getElementById("nav");

//****************EVENTOS****************

//--Objetos y funciones para los eventos--

//Objeto para que los evento se ejecuten una sóla vez
//Al desactivar el evento una vez se ejecute
const onceTime = {
  once: true,
};

//Movimiento a la izquierda

const moveLeft = () => {
  //Identificamos el primer elemento
  const firstItem = items.querySelectorAll(".carrusel__item")[0];
  const width = firstItem.offsetWidth;

  //Aplicamos la animación
  items.style.transition = "transform .5s linear";
  items.style.transform = `translateX(-${width}px)`;
  //Colocamos la primera imagen en última posición
  setTimeout(() => {
    items.insertAdjacentElement("beforeend", firstItem);
    items.style.transition = "none";
    items.style.transform = "translateX(0px)";
    // Volvemos a activar el evento, si no sólo se ejecutaría el evento una vez
    buttons.addEventListener("click", move, onceTime);
  }, 500);
};

const moveRight = () => {
  //Identificamos el último elemento
  const allItems = items.querySelectorAll(".carrusel__item");
  const lastItem = allItems[allItems.length - 1];
  const width = lastItem.offsetWidth;

  //Aplicamos la animación
  items.style.transition = "transform .5s linear";
  items.style.transform = `translateX(${width}px)`;
  //Colocamos la última imagen en primera posición
  setTimeout(() => {
    items.insertAdjacentElement("afterbegin", lastItem);
    items.style.transition = "none";
    items.style.transform = "translateX(0px)";
    // Volvemos a activar el evento, si no sólo se ejecutaría el evento una vez
    buttons.addEventListener("click", move, onceTime);
  }, 500);
};

function move(e) {
  if (e.target.id === "btn-left") {
    moveLeft();
  }
  if (e.target.id === "btn-right") {
    moveRight();
  }
}

function showNav(e) {
  nav.classList.toggle("nav__show");
}

buttons.addEventListener("click", move, onceTime);

btnNav.addEventListener("click", showNav);
