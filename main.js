window.onload = () => {
    const btn = document.getElementById("accept-btn");
    const intro = document.getElementById("intro-screen");

    btn.addEventListener("click", () => {
        // 1. Start fading out the apology screen
        intro.classList.add("hidden");

        // 2. Unpause the flower animations
        // We wait a tiny bit so the bloom starts as the message disappears
        setTimeout(() => {
            document.body.classList.remove("container");
        }, 500);
    });
};
