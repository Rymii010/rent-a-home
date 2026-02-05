// SHOW LOGIN METHOD
const method = localStorage.getItem("loginMethod");
if (method) {
  document.getElementById("loginInfo").innerText =
    "Logged in via " + method;
}

// LOGOUT FUNCTION
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

// GO TO ADD HOME PAGE
function goToAddHome() {
  window.location.href = "add.html";
}

// SEARCH FUNCTION (DEMO)
function searchHomes() {
  const query = document.getElementById("searchInput").value;

  if (query.trim() === "") {
    alert("Please enter a location to search");
    return;
  }

  alert("Searching homes in: " + query);
}

