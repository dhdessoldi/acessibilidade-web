# Acessibilidade Web

Este projeto foi desenvolvido em conjunto de um curso sobre Acessibilidade Web pela [alura](https://www.alura.com.br/) e tem como base a Apeperia.
Apeperia é uma empresa fictícia de criação de aplicativos, e está sendo representada por uma página estática desenvolvida com HTML e CSS puro.

### Tecnologias utilizadas

* HTML;
* CSS;
* JavaScript;
* [NVDA](https://www.nvaccess.org/download/)

## Desenvolvimento

O projeto foi desenvolvido a partir de um curso anterior, encontrado neste [repositório](https://github.com/dhdessoldi/Apeperia). \
A partir das [Diretrizes de Acessbilidade para Conteúdo Web](https://www.w3.org/Translations/WCAG20-pt-br/), foram desenvolvidas boas práticas neste HTML para melhorar a experiência de usuários com deficiência, entre elas:
* Utilização de alt text descritivos para imagens que tenham relação direta com o conteúdo da página;
* Utilização de [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) para referenciar elementos da página;
* Utilização de [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) para nomear elementos da página como botões, por exemplo;
* Utilização da propriedade [inert](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert) para manter o foco dentro do modal, facilitando a leitura de tela;
* Utilização do [MailCheck](https://github.com/mailcheck/mailcheck) para verificar e sugerir correções de e-mail em caso de erros de preenchimento do formulário;

Para rodar a aplicação basta fazer download do repositório e acessar o index.html. Para modificar o código será necessário instalar:

* [Visual Studio Code](https://code.visualstudio.com/) ou algum outro editor de código;

### ScreenShots

![Captura de tela do campo email sugerindo correção de gnail para gmail](https://github.com/dhdessoldi/acessibilidade-web/assets/110476564/2f73f7d7-9620-4e0f-99e4-66148bc52b0b)

![Captura de tela da modal de inscrição de newsletter aberta com foco no campo de preenchimento de email](https://github.com/dhdessoldi/acessibilidade-web/assets/110476564/064b8bff-e204-401f-a49f-efc363539099)


