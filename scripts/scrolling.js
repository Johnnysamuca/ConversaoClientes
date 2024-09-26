document.addEventListener("DOMContentLoaded", () => {
  const btnRodape = document.querySelector(".btn-rodape");

  function heroScrolling() {
    window.scrollBy({
      top: -window.scrollY,
      behavior: "smooth",
    });
    console.log("Ok");
  }

  btnRodape.addEventListener("click", heroScrolling);
});
