// 側拉清單控制
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// 購物車邏輯
let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');
    
    // 清空購物車內容
    cartItems.innerHTML = '';
    
    // 更新購物車
    cart.forEach((entry, index) => {
        const div = document.createElement('div');
        div.textContent = `${entry.item} - $${entry.price}`;
        cartItems.appendChild(div);
    });
    
    // 更新總金額
    totalPriceDisplay.textContent = `總金額: $${totalPrice}`;
}
