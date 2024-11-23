// 側拉清單控制
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    } else {
        sidebar.classList.add('open');
    }
}

// 顯示或隱藏子菜單
function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

// 動態切換內容
function showContent(category) {
    const content = document.getElementById('content');
    let html = '';

    // 根據分類切換內容
    switch (category) {
        case 'toast':
            html = `
                <h2>土司</h2>
                <ul>
                    <li>豬排蛋土司 - $50</li>
                    <li>鮪魚蛋土司 - $55</li>
                    <li>火腿起司土司 - $60</li>
                </ul>
            `;
            break;
        case 'pancake':
            html = `
                <h2>蛋餅</h2>
                <ul>
                    <li>原味蛋餅 - $40</li>
                    <li>玉米蛋餅 - $45</li>
                    <li>培根蛋餅 - $50</li>
                </ul>
            `;
            break;
        case 'burger':
            html = `
                <h2>漢堡</h2>
                <ul>
                    <li>牛肉漢堡 - $60</li>
                    <li>雞肉漢堡 - $55</li>
                    <li>培根漢堡 - $65</li>
                </ul>
            `;
            break;
        case 'pasta':
            html = `
                <h2>鐵板麵</h2>
                <ul>
                    <li>雞肉鐵板麵 - $70</li>
                    <li>黑胡椒牛肉鐵板麵 - $80</li>
                </ul>
            `;
            break;
        case 'drink':
            html = `
                <h2>飲料</h2>
                <ul>
                    <li>紅茶 - $20</li>
                    <li>奶茶 - $30</li>
                    <li>咖啡 - $40</li>
                </ul>
            `;
            break;
        case 'random':
            html = `
                <h2>隨機餐點搭配</h2>
                <p>系統將為您搭配以下隨機餐點：</p>
                <ul>
                    <li>隨機土司</li>
                    <li>隨機蛋餅</li>
                    <li>隨機飲料</li>
                </ul>
                <p>總價約 $100</p>
            `;
            break;
        default:
            html = '<p>請選擇分類以顯示內容。</p>';
    }

    // 更新內容區域
    content.innerHTML = html;
}
