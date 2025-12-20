window.onload = () => {
    const btn = document.getElementById("accept-btn");
    const intro = document.getElementById("intro-screen");
    const music = document.getElementById("bg-music");

    // Add event listener to the "accept" button
    if (btn) {
        btn.addEventListener("click", () => {
            // 1. Play the music immediately
            music.play().catch(err => console.log("Music blocked: ", err));

            // 2. Hide the intro overlay
            intro.classList.add("hidden");

            // 3. Start the animations by removing the pause class
            setTimeout(() => {
                document.body.classList.remove("container");
            }, 600);
        });
    }
};
