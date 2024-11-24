let cart = []; // 儲存購物車內容
let totalPrice = 0; // 儲存總金額
let cartCount = 0; // 購物車內商品數量

// 側拉清單控制
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
}

// 顯示或隱藏子菜單
function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

// 顯示內容並自動關閉側拉選單
function showContent(category, closeSidebar = false) {
    if (closeSidebar) toggleSidebar();

    const content = document.getElementById('content');
    let html = '';

    // 根據分類切換內容
    switch (category) {
        case 'toast':
            html = `
                <h2>土司</h2>
                <ul>
                    <li>豬排蛋土司 - $50 <button onclick="addToCart('豬排蛋吐司', 50)">加入購物車</button></li>
                    <li>鮪魚蛋土司 - $55 <button onclick="addToCart('鮪魚蛋吐司', 55)">加入購物車</button></li>
                    <li>火腿起司土司 - $60 <button onclick="addToCart('火腿起司吐司', 60)">加入購物車</button></li>
                </ul>
            `;
            break;
        case 'pancake':
            html = `
                <h2>蛋餅</h2>
                <ul>
                    <li>原味蛋餅 - $40 <button onclick="addToCart('原味蛋餅', 40)">加入購物車</button></li>
                    <li>玉米蛋餅 - $45 <button onclick="addToCart('玉米蛋餅', 45)">加入購物車</button></li>
                    <li>培根蛋餅 - $50 <button onclick="addToCart('培根蛋餅', 50)">加入購物車</button></li>
                </ul>
            `;
            break;
        case 'burger':
            html = `
                <h2>漢堡</h2>
                <ul>
                    <li>牛肉漢堡 - $60 <button onclick="addToCart('牛肉漢堡', 60)">加入購物車</button></li>
                    <li>雞肉漢堡 - $55 <button onclick="addToCart('雞肉漢堡', 55)">加入購物車</button></li>
                    <li>培根漢堡 - $65 <button onclick="addToCart('培根漢堡', 65)">加入購物車</button></li>
                </ul>
            `;
            break;
        case 'pasta':
            html = `
                <h2>鐵板麵</h2>
                <ul>
                    <li>雞肉鐵板麵 - $70 <button onclick="addToCart('雞肉鐵板麵', 70)">加入購物車</button></li>
                    <li>黑胡椒牛肉鐵板麵 - $80 <button onclick="addToCart('黑胡椒牛肉鐵板麵', 80)">加入購物車</button></li>
                </ul>
            `;
            break;
        case 'drink':
            html = `
                <h2>飲料</h2>
                <ul>
                    <li>紅茶 - $20 <button onclick="addToCart('紅茶', 20)">加入購物車</button></li>
                    <li>奶茶 - $30 <button onclick="addToCart('奶茶', 30)">加入購物車</button></li>
                    <li>咖啡 - $40 <button onclick="addToCart('咖啡', 40)">加入購物車</button></li>
                </ul>
            `;
            break;
        default:
            html = '<p>請選擇分類以顯示內容。</p>';
    }

    content.innerHTML = html;
}

// 加入購物車
function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    cartCount += 1;

    updateCart();
    showNotification(`${item} 已加入購物車`);
}

// 更新購物車
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartCountElement = document.getElementById('cart-count');

    // 更新購物車項目
    cartItems.innerHTML = cart.map(entry => `<li>${entry.item} - $${entry.price}</li>`).join('');
    // 更新總金額
    totalPriceElement.textContent = `$${totalPrice}`;
    // 更新購物車數量
    cartCountElement.textContent = `(${cartCount})`;
}

// 顯示購物車
function showCart() {
    document.getElementById('cart-modal').style.display = 'block';
}

// 關閉購物車
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// 顯示提示訊息
function showNotification(message) {
    const toast = document.getElementById('toast-notification');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000); // 2秒後隱藏
}
