const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors()); // Это разрешит все источники

// Массив персонажей
const characters = [
    {
        id: 1,
        name: 'Эльфийский маг',
        class: 'Маг',
        level: 5
    },
    {
        id: 2,
        name: 'Гном-воин',
        class: 'Воин',
        level: 4
    },
    {
        id: 3,
        name: 'Человек-вор',
        class: 'Вор',
        level: 3
    },
    {
        id: 4,
        name: 'Полурослик-следопыт',
        class: 'Следопыт',
        level: 6
    },
    {
        id: 5,
        name: 'Титан-колдун',
        class: 'Колдун',
        level: 7
    }
];

// Маршрут для получения всех персонажей
app.get('/api/characters', (req, res) => {
    res.json(characters);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
