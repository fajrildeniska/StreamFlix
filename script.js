
function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// PLAY MOVIE
function playMovie(movieName) {
    showToast("▶ Memutar film: " + movieName);
}

function addToList(movieName) {
    let myList = JSON.parse(
        localStorage.getItem("myList") || "[]"
    );

    if (myList.includes(movieName)) {
        showToast(movieName + " sudah ada di My List!");
        return;
    }

    myList.push(movieName);

    localStorage.setItem(
        "myList",
        JSON.stringify(myList)
    );

    showToast(movieName + " berhasil ditambahkan!");
}

function filterMovies(category, button) {
    const movies = document.querySelectorAll(
        "#trending .movie-card"
    );

    document.querySelectorAll(".category").forEach(item => {
        item.classList.remove("active");
    });

    button.classList.add("active");

    movies.forEach(movie => {
        const movieCategory = movie.dataset.category;

        if (
            category === "All" ||
            movieCategory === category
        ) {
            movie.style.display = "";
        } else {
            movie.style.display = "none";
        }
    });
}

function fallbackPoster(img, title) {
    img.onerror = null;

    img.src = "https://placehold.co/300x450/18181f/ffffff?text="
        + encodeURIComponent(title);
}
