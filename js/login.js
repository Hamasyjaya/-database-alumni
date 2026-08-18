```javascript
// ==========================================
// SISTEM DATABASE ALUMNI HAMASY
// login.js
// ==========================================

// ------------------------------
// Konfigurasi Login Sementara
// (Nanti akan diganti dari Google Apps Script)
// ------------------------------

const ADMIN = {
    username: "admin",
    password: "admin123"
};

// ------------------------------
// Tunggu sampai halaman selesai dimuat
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {

    // Jika sudah login
    if (localStorage.getItem("login") === "true") {
        window.location.href = "dashboard.html";
        return;
    }

    const form = document.getElementById("loginForm");
    const alertBox = document.getElementById("loginAlert");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validasi sederhana
        if (
            username === ADMIN.username &&
            password === ADMIN.password
        ) {

            localStorage.setItem("login", "true");
            localStorage.setItem("username", username);

            window.location.href = "dashboard.html";

        } else {

            alertBox.classList.remove("d-none");

            setTimeout(() => {
                alertBox.classList.add("d-none");
            }, 3000);

        }

    });

});
```
