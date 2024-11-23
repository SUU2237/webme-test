// 側拉清單控制
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// 顯示或隱藏子菜單
function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block'; // 顯示子菜單
    } else {
        submenu.style.display = 'none'; // 隱藏子菜單
    }
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
