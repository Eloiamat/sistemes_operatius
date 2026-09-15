/* =========================================================
   CURSOR PERSONALITZAT
   ========================================================= */

const cursor = document.querySelector(".cursor-personalitzat");

if (cursor) {

    cursor.style.left = window.innerWidth / 2 + "px";
    cursor.style.top = window.innerHeight / 2 + "px";

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

}
