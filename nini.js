const bouton = document .getElementById("bouton");
const menu = document.getElementById("menu");
bouton.addEventListener("click", function () {menu.classList.toggle("cache");
});
const boutonSombre = document.getElementById("bouton-sombre");
boutonSombre.addEventListener("click", function () 
{document.body.classList.toggle("sombre");
});