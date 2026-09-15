/* =========================================================
   CURSOR PERSONALITZAT
   ========================================================= */

const cursor = document.querySelector(".cursor-personalitzat");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
