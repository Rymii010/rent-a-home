let homes = JSON.parse(localStorage.getItem("homes")) || [];

const homeList = document.getElementById("homeList");
const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");

function renderHomes() {
  homeList.innerHTML = "";

  let filtered = homes.filter(home => {
    const matchText =
      home.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      home.location.toLowerCase().includes(searchInput.value.toLowerCase());

    let matchPrice = true;
    if (priceFilter.value !== "all") {
      matchPrice = parseInt(home.price) <= parseInt(priceFilter.value);
    }

    return matchText && matchPrice;
  });

  filtered.forEach((home, index) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${home.image}">
      <h3>${home.title}</h3>
      <p>${home.location}</p>
      <p>Rs. ${home.price}</p>
      <button class="delete-btn" onclick="deleteHome(${index})">Delete</button>
    `;
    homeList.appendChild(div);
  });
}

function deleteHome(index) {
  if (confirm("Delete this listing?")) {
    homes.splice(index, 1);
    localStorage.setItem("homes", JSON.stringify(homes));
    renderHomes();
  }
}

if (homeList) renderHomes();
if (searchInput) searchInput.addEventListener("input", renderHomes);
if (priceFilter) priceFilter.addEventListener("change", renderHomes);

function toggleTheme() {
  document.body.classList.toggle("dark");
}
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  // Save login state
  localStorage.setItem("loggedIn", "true");

  // Redirect to main page
  window.location.href = "index.html";
}
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
function socialLogin(provider) {
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("loginMethod", provider);

  window.location.href = "index.html";
}


