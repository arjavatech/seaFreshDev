document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
   
    updateCartCount();

    document.querySelectorAll(".add-btn").forEach((button) => {
        button.addEventListener("click", function () {
            let productContainer = this.closest(".fish-item");
            let productName = productContainer.querySelector(".readmore-heading").innerText;
            let productPrice = productContainer.querySelector(".readmore-amt").innerText;
            let quantity = parseInt(productContainer.querySelector(".quantity-input").value);

            let existingProduct = cart.find((item) => item.name === productName);

            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: quantity });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
        });
    });

    function updateCartCount() {
        // let cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelector(".cart-count").innerText = parseInt(cart.length);
    }
});
