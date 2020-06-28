app.get('/', (req, res) => {
    // 对客户端做出响应
	res.send('Hello Express');
});
// 当客户端以post方式访问/add路由时
app.post('/add', (req, res) => {
	res.send('使用post方式请求了/add路由');
});