// script.js

document.addEventListener("DOMContentLoaded", () => {
    const showPasswordIcon = document.querySelector(".show-password");
    const passwordField = document.getElementById("password");

    showPasswordIcon.addEventListener("click", () => {
        const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
        passwordField.setAttribute("type", type);
    });
});
