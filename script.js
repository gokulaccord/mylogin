const API = "https://script.google.com/macros/s/AKfycbw8PpXQkw5I-ZGhQ1IKhvflNTJDYbuQWKUpd9FT8nUhDhtC1jCEICyU6t2TQa5B2mLO/exec";

function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    fetch(API +
        "?username=" + encodeURIComponent(username) +
        "&password=" + encodeURIComponent(password))
    .then(response => response.json())
    .then(data => {

        if (data.success) {
            localStorage.setItem("name", data.name);
            window.location.href = "index.html";
        }
        else {
            document.getElementById("msg").innerHTML =
                "Invalid Username or Password";
        }

    })
    .catch(err => {
        console.error(err);
        alert("Connection failed");
    });

}
