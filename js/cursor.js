/* =========================================================
   CURSOR PERSONALITZAT
   ========================================================= */

const cursor = document.querySelector(".cursor-personalitzat");

if (cursor) {

  let mouseX = 0;
  let mouseY = 0;

  let cursorX = 0;
  let cursorY = 0;


  /* Posició del ratolí */

  document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

  });


  /* Moviment suau */

  function animarCursor() {

    cursorX += (mouseX - cursorX) * 0.30;
    cursorY += (mouseY - cursorY) * 0.30;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    requestAnimationFrame(animarCursor);

  }

  animarCursor();


  /* Elements interactius */

  document.querySelectorAll(
    "a, button, input, textarea, select"
  ).forEach((element) => {

    element.addEventListener("mouseenter", () => {
      cursor.classList.add("actiu");
    });

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("actiu");
    });

  });


  /* Click */

  document.addEventListener("mousedown", () => {
    cursor.classList.add("click");
  });

  document.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
  });


  /* Activar cursor personalitzat */

  document.body.classList.add("cursor-actiu");

}
