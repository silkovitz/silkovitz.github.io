
  document.addEventListener('DOMContentLoaded', () => {
    const img   = document.getElementById('satan');
    const audio = document.getElementById('squeak-audio');

    img.addEventListener('click', () => {
      audio.currentTime = 0;
      audio.play();

      img.classList.remove('squash-stretch');
      void img.offsetWidth;
      img.classList.add('squash-stretch');
    });
  });