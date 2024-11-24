const express = require('express');
const cors = require('cors');
const app = express();

// 啟用 CORS 支援
app.use(cors());

// 設定 JSON 輸出
app.use(express.json());

// 設定端口
const PORT = process.env.PORT || 5000;

// 設計一個簡單的 GET 路由
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
