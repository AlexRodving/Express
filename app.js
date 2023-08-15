const express = require('express')
const path = require('path')
const app = express()
const port = 3000 // Порт, на котором будет запущен сервер

//По корневому маршруту выведет Hello World!
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Middleware для обслуживания статических файлов из папки "public"
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для /about, который отдаст index.html
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})
