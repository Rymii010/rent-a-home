// -----------------------------
// AUTH CHECK (protect main page)
// -----------------------------
if (window.location.pathname.includes("index.html")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

// -----------------------------
// SHOW LOGIN METHOD
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const info = document.getElementById("loginInfo");
  const method = localStorage.getItem("loginMethod");

  if (info && method) {
    info.innerText = "Logged in via " + method;
  }
});

// -----------------------------
// LOGOUT BUTTON
// -----------------------------
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

// -----------------------------
// LIST YOUR HOME BUTTON
// -----------------------------
function goToAddHome() {
  window.location.href = "add.html";
}

// -----------------------------
// SEARCH BUTTON
// -----------------------------
function searchHomes() {
  const input = document.getElementById("searchInput");

  if (!input || input.value.trim() === "") {
    alert("Please enter a location");
    return;
  }

  alert("Searching homes in: " + input.value);
}

// -----------------------------
// LOGIN (DEMO)
// -----------------------------
function demoLogin(method) {
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("loginMethod", method);
  window.location.href = "index.html";
}
<button onclick="demoLogin('Email')">Login</button>
<button onclick="demoLogin('Google')">Google</button>
<button onclick="demoLogin('Facebook')">Facebook</button>
<button onclick="goToAddHome()">+ List Your Home</button>
<button onclick="logout()">Logout</button>
<input type="text" id="searchInput" placeholder="City or location">
<button onclick="searchHomes()">Search</button>
