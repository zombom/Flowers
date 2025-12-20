window.onload = () => {
    const btn = document.getElementById("accept-btn");
    const intro = document.getElementById("intro-screen");
    const music = document.getElementById("bg-music");

    // Check if the button exists before adding the listener
    if (btn) {
        btn.addEventListener("click", () => {
            // 1. Play the music
            music.play().catch(error => console.log("Music play blocked", error));

            // 2. Hide the purple apology screen
            intro.classList.add("hidden");

            // 3. Remove the 'container' class to start flower animations
            setTimeout(() => {
                document.body.classList.remove("container");
            }, 500);
        });
    }
};
