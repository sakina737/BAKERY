

document.addEventListener("DOMContentLoaded", function () {
    // Menu Filtering
    const categoryButtons = document.querySelectorAll(".category-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-category");

            menuItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Navigation Highlighting
    const navLinks = document.querySelectorAll(".navlinks");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Shopping Cart Functionality
    const cartIcon = document.querySelector(".fa-cart-shopping");
    let cartCount = 0;

    menuItems.forEach(item => {
        const addToCartBtn = document.createElement("button");
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.classList.add("add-to-cart-btn");
        item.appendChild(addToCartBtn);

        addToCartBtn.addEventListener("click", function () {
            cartCount++;
            updateCartCount();
            alert("Item added to cart!");
        });
    });

    function updateCartCount() {
        cartIcon.setAttribute("data-count", cartCount);
        cartIcon.style.position = "relative";
        cartIcon.style.fontSize = "20px";
        cartIcon.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> (${cartCount})`;
    }
});
