//videos
const filmes = document.querySelectorAll('.filme');

filmes.forEach((filme) => {
  const img = filme.querySelector('img');
  const trailer = filme.querySelector('.trailer');

  filme.addEventListener('mouseover', () => {
    trailer.play();
  });

  filme.addEventListener('mouseout', () => {
    trailer.pause();
  });
});