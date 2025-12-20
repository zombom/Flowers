onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  const intro = document.getElementById('intro-screen');
  const btn = document.getElementById('start-btn');
  const audio = document.getElementById('bg-music');

  btn.addEventListener('click', () => {
      // 1. Play Music
      // Note: This requires the file to be present.
      audio.volume = 1.0; 
      audio.play().catch(error => {
          console.error("Music could not play. Ensure 'music.mp3' is uploaded to the repository.", error);
      });

      // 2. Fade out intro
      intro.classList.add('fade-out');

      // 3. Start flower animation
      setTimeout(() => {
          document.body.classList.remove("container"); 
          intro.style.display = 'none'; 
      }, 1000);
  });
