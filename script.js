const form = document.querySelector(".contact-form");
const success = document.getElementById("formSuccess");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show success message
    success.classList.remove("d-none");
    success.classList.add("show");

    // Clear form fields
    form.reset();

    // Hide success message after 3 seconds
    setTimeout(() => {
        success.classList.remove("show");
        // Optionally add d-none back after fade out
        setTimeout(() => {
            success.classList.add("d-none");
        }, 500); // matches CSS transition duration
    }, 3000);
});
