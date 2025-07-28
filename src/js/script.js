function mostrarSecao(id) {
  const secoes = document.querySelectorAll('main section');
  secoes.forEach(secao => {
    secao.classList.remove('active');
  });

  const secaoSelecionada = document.getElementById(id);
  if (secaoSelecionada) {
    secaoSelecionada.classList.add('active');
    secaoSelecionada.scrollIntoView({ behavior: 'smooth' });
  }
}
