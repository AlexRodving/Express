import express from 'express'
import path from 'path'
import dbClient from './db/mongo.js'
const app = express()
const port = 3000 // Порт, на котором будет запущен сервер

dbClient.connect()
//По корневому маршруту выведет Hello World!
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Middleware для обслуживания статических файлов из папки "public"
app.use(express.static('public'))

// Маршрут для /about, который отдаст index.html
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})

process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});
