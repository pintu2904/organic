// Header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");

        // Fetch API example (fetch only once when scrolled past 50px)
        if (!nav.dataset.fetched) {
            fetch('/api/navbar-data')
                .then(response => response.json())
                .then(data => {
                    console.log('Fetched data:', data);
                    // You can use `data` to update the navbar dynamically
                    nav.dataset.fetched = true; // Mark as fetched
                })
                .catch(error => console.error('Error fetching navbar data:', error));
        }
    } else {
        nav.classList.remove("header-scrolled");
    }
};

// Navbar hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse"); // Fixed spelling
navBar.forEach(function (e) {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    });
});
