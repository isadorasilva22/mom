function abrirDisco(elementoClicado) {
    const disco = elementoClicado.closest('.music');
  
    const todosDiscos = document.querySelectorAll('.music');
  
    todosDiscos.forEach(outro => {
      const vinil = outro.querySelector('.vinil');
      const audio = outro.querySelector('audio');
  
      // Se não for o disco clicado, para tudo e remove a rotação
      if (outro !== disco) {
        outro.classList.remove('aberto');
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
        if (vinil) {
          vinil.classList.remove('girando');
        }
      }
    });
  
    // Alterna o estado do disco clicado
    disco.classList.toggle('aberto');
  
    const vinilAtual = disco.querySelector('.vinil');
    const audioAtual = disco.querySelector('audio');
  
    if (disco.classList.contains('aberto')) {
      vinilAtual.classList.add('girando');
      audioAtual.play();
    } else {
      vinilAtual.classList.remove('girando');
      audioAtual.pause();
      audioAtual.currentTime = 0;
    }
  }
  