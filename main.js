window.onload = () => {
    const btn = document.getElementById("accept-btn");
    const intro = document.getElementById("intro-screen");

    btn.addEventListener("click", () => {
        // Start fading the apology message
        intro.classList.add("hidden");

        // Start the flower animations as the screen fades
        setTimeout(() => {
            document.body.classList.remove("container");
        }, 500);
    });
};
