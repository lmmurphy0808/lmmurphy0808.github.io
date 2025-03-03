document.addEventListener("DOMContentLoaded", function() {
    displayCart();
});

function addToCart() {
    let name = document.getElementById("name").value;
    let item = document.getElementById("item").value;
    let details = "";

    if (document.getElementById("address")) {
        let address = document.getElementById("address").value;
        let phone = document.getElementById("phone").value;
        details = `Delivery to: ${address}, Phone: ${phone}`;
    } else if (document.getElementById("time")) {
        let time = document.getElementById("time").value;
        details = `Pickup Time: ${time}`;
    }

    let order = { name, item, details };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(order);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Order added to cart! Redirecting...");
}

// Display orders in cart.html
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartList = document.getElementById("cart-items");

    if (!cartList) return;

    cartList.innerHTML = cart.length === 0 
        ? "<li>Your cart is empty.</li>"
        : cart.map(order => `<li>${order.name} ordered a ${order.item} - ${order.details}</li>`).join("");
}

function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}
