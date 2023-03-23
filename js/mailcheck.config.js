let campoEmail = document.querySelector("#email");
let sugestao = document.querySelector("#sugestao");
let domains = [
  "gmail.com",
  "hotmail.com",
  "outlook.com",
  "terra.com.br",
  "uol.com.br",
];
let secondLevelDomains = ["hotmail"];
let topLevelDomains = ["com", "net", "org"];

campoEmail.addEventListener("blur", function () {
  Mailcheck.run({
    email: campoEmail.value,
    domains: domains, // optional
    topLevelDomains: topLevelDomains, // optional
    secondLevelDomains: secondLevelDomains, // optional
    suggested: function (suggestion) {
      sugestao.style.display = "inline-block";
      sugestao.innerHTML = `Você quis dizer ${suggestion.full}?`;
      sugestao.parentNode.classList.add("contatoCampo--erro");
      campoEmail.classList.add("contatoCampo--validouErro");
      sugestao.setAttribute("tabindex", "0");
      sugestao.setAttribute("role", "alert");
    },
  });
});
