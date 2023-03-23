let btns = document.querySelectorAll('.listaDeArtigos-slider-item');
let noticias = document.querySelectorAll('.listaDeArtigos-item');

new0.style.display = 'block';

let indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.id = 'escondeVisualmente';
indicadorSlideAtual.textContent = '(Slide atual)';


// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {

    noticias.forEach((noticia)=> {
      noticia.style.display = 'none';

      if (this.getAttribute('data-sliderItem')=== noticia.getAttribute('data-noticia')) {
        noticia.style.display = 'block';
      } 

    })

    document.querySelector('.listaDeArtigos-slider-item .escondeVisualmente').remove();
    this.append(indicadorSlideAtual)

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})