window.onload = () => {
  // Select the button and the intro screen element
  const btn = document.getElementById("accept-btn");
  const intro = document.getElementById("intro-screen");

  // Add an event listener to detect when the button is clicked
  btn.addEventListener("click", () => {
    
    // 1. Add the 'hidden' class to fade out the apology screen
    // This uses the transition we defined in the CSS
    intro.classList.add("hidden");

    // 2. Remove the 'container' class from the body
    // In your CSS, '.container *' is set to 'paused'. 
    // Removing this class "unpauses" all flower animations.
    // We use a small timeout (600ms) so the flowers begin blooming 
    // just as the overlay finishes fading out.
    setTimeout(() => {
      document.body.classList.remove("container");
    }, 600);
  });
};
