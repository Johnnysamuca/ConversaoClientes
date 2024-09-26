const botaoAgendaConversa = document.querySelector(".caixa-hero_btn");

function redirecionaWhats() {
  const phoneNumber = "5524999388876";
  const message = "Olá gostaria de fazer uma página";
  const whatsUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.location.href = whatsUrl;
}

botaoAgendaConversa.addEventListener("click", redirecionaWhats);
