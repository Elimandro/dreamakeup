document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    let total = 0;

    const cartCount = document.getElementById("cart-count");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const modal = document.getElementById("cart-modal");
    const closeModal = document.querySelector(".close");

    document.querySelector(".cart").addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const productCard = this.closest(".product-card");
            const productName = productCard.querySelector(".product-name").textContent;
            const productPrice = parseInt(productCard.querySelector(".product-price").textContent.replace("C$", ""));

            // Añadir el producto al carrito
            cart.push({ name: productName, price: productPrice });
            total += productPrice;
            updateCart();
        });
    });

    function updateCart() {
        cartItemsContainer.innerHTML = "";
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = ${item.name} - C$ ${item.price};
            cartItemsContainer.appendChild(li);
        });
        cartCount.textContent = cart.length;
        cartTotal.textContent = C$ ${total};
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});