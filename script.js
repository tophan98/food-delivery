let cart = JSON.parse(localStorage.getItem("cart")) || [];

function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    document.getElementById("cart-count").textContent = cart.length;
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    if (!cartItems) return; // Prevent errors on login page

    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order placed successfully! 🍔");
        cart = [];
        localStorage.removeItem("cart");
        updateCartDisplay();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}

function searchMenu() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.querySelectorAll(".card");
    items.forEach(item => {
        let name = item.querySelector("h3").textContent.toLowerCase();
        item.style.display = name.includes(input) ? "block" : "none";
    });
}

function filterMenu(category) {
    let items = document.querySelectorAll(".card");
    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Login / Signup Logic
function signup() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user && pass) {
        localStorage.setItem("user", JSON.stringify({ user, pass }));
        alert("Signup successful!");
    } else {
        alert("Please fill all fields!");
    }
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.user === user && savedUser.pass === pass) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials!");
    }
}

// Initialize Cart Display on Page Load
updateCartDisplay();
// Example: Alert when adding to cart
document.querySelectorAll(".menu-item button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});
// Example for future features
document.querySelectorAll(".menu-card button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Item added to cart! 🛒");
    });
});
document.querySelectorAll(".menu-card button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Item added to cart! 🛒");
    });
});

