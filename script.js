document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

   
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number in the format 123-456-7890.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
    window.location.href = "home2.html";
});

function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    alert("Registration successful!");
    setTimeout(function() {
        window.location.href = "login.html";
    }, 800); 
    return false; 
}

let cart = [];

function addToCart(itemName, itemPrice, quantity) {
    cart.push({ name: itemName, price: itemPrice, quantity: quantity });
    updateCart();
}

function updateCart() {
    let cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";

    let totalPrice = 0;
    cart.forEach(item => {
        cartElement.innerHTML += `<div>${item.name} - Quantity: ${item.quantity} - $${item.price * item.quantity}</div>`;
        totalPrice += item.price * item.quantity;
    });

    cartElement.innerHTML += `<div><strong>Total Price:</strong> $${totalPrice}</div>`;
}
