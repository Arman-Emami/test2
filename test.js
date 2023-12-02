
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var u = localStorage.getItem("username");
    var p = localStorage.getItem("password");

    // Check if the entered username and password are correct
    if (username === u && password === p) {
        // Store user information in localStorage (for demonstration purposes)
        

        alert("Login successful!"); // You can replace this with other actions

        // Call a separate function to handle the redirection
        window.location.href = "/Client/mainPage.html";
    } else {
        alert("Invalid username or password");
        window.location.href = "/Login-SignUp/landingPage.html";
    }
}




