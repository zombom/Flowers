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
      // Browser policy requires this click to start audio
      if(audio) {
          audio.volume = 1.0;
          audio.play().catch(error => {
              console.error("Music playback failed. Ensure 'music.mp3' is in the root folder.", error);
          });
      }

      // 2. Fade out intro
      intro.classList.add('fade-out');

      // 3. Start flower animation
      setTimeout(() => {
          document.body.classList.remove("container"); 
          intro.style.display = 'none'; 
      }, 1000);
  });
