// Функция для получения данных о персонажах
async function fetchCharacters() {
    try {
        const response = await fetch('http://127.0.0.1:3000/api/characters');
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }
        const data = await response.json();
        displayCharacters(data); // Функция для отображения данных
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

// Функция для отображения персонажей
function displayCharacters(characters) {
    const gridContainer = document.getElementById('character-grid');
    gridContainer.innerHTML = ''; // Очистка контейнера перед добавлением новых данных

    characters.forEach(character => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.innerHTML = `<strong>${character.name}</strong><br>${character.class}<br>Уровень: ${character.level}`;
        gridContainer.appendChild(item);
    });
}

// Вызов функции для получения данных при загрузке страницы
fetchCharacters();