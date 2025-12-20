window.onload = () => {
    const btn = document.getElementById("accept-btn");
    const intro = document.getElementById("intro-screen");

    btn.addEventListener("click", () => {
        // Fade the purple apology screen
        intro.classList.add("hidden");

        // Start the purple flowers blooming
        setTimeout(() => {
            document.body.classList.remove("container");
        }, 500);
    });
};
