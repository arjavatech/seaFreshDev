document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdownMenuButton").forEach(dropdownButton => {
        const dropdownText = dropdownButton.querySelector(".dropdown-text");
        const priceBox = dropdownButton.querySelector(".price-box");
        const arrowIcon = dropdownButton.querySelector(".arrow-icon");

        dropdownButton.nextElementSibling.querySelectorAll(".dropdown-item").forEach(item => {
            item.addEventListener("click", function (event) {
                event.preventDefault();

                // Get selected date and price
                let selectedDate = this.getAttribute("data-date");
                let selectedPrice = this.getAttribute("data-price") || "";

                // Update dropdown button text
                dropdownText.innerHTML = selectedDate;
                priceBox.innerHTML = selectedPrice;

                // Toggle default dropdown style
                if (selectedPrice === "") {
                    dropdownButton.classList.add("default-dropdown");
                    priceBox.parentElement.classList.add("default-price");
                    arrowIcon.classList.add("default-arrow");
                } else {
                    dropdownButton.classList.remove("default-dropdown");
                    priceBox.parentElement.classList.remove("default-price");
                    arrowIcon.classList.remove("default-arrow");
                }

                // Remove active class from all items in this dropdown
                dropdownButton.nextElementSibling.querySelectorAll(".dropdown-item").forEach(i => i.classList.remove("active"));

                // Set active class on selected item
                this.classList.add("active");
            });
        });
    });

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // localStorage.removeItem("cart");

    // Update cart count on page load
    updateCartCount();

    document.querySelectorAll(".add-btn").forEach((button) => {
        button.addEventListener("click", function () {
            let productContainer = this.closest(".fish-item");

            // Extract product details
            let productName = productContainer.querySelector(".readmore-heading").innerText.trim();
            let productPrice = parseFloat(productContainer.querySelector(".readmore-amt").innerText.replace(/[^0-9.]/g, ""));
            let quantity = parseInt(productContainer.querySelector(".quantity-input").value) || 1;
            
            // Find product in cart (by name)
            let existingProduct = cart.find((item) => item.name === productName);

            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: quantity });
            }

            // Store updated cart in localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update cart count
            updateCartCount();
        });
    });

    // Function to update cart count
    function updateCartCount() {
        let cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        let cartCountElement = document.querySelector(".cart-count");

        if (cartCountElement) {
            cartCountElement.innerText = cartCount;
        }
    }
    

});
