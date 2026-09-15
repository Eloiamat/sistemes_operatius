/* =========================================================
   CURSOR PERSONALITZAT
   ========================================================= */

const cursor = document.querySelector(".cursor-personalitzat");

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        document.body.classList.add("cursor-actiu");

    });

}
