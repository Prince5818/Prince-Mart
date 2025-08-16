// categoryButtons
function scrollToProductsHeading() { // Function name changed
    document.getElementById('products-heading').scrollIntoView({ behavior: 'smooth' }); // Target ID changed
}

document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-button');
    const productParts = document.querySelectorAll('.product-part');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.dataset.category;

            // Remove 'active' class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            productParts.forEach(product => {
                const productCategory = product.dataset.category;
                if (selectedCategory === 'all' || productCategory === selectedCategory) {
                    product.style.display = 'block'; // Show the product
                } else {
                    product.style.display = 'none'; // Hide the product
                }
            });
        });
    });
});