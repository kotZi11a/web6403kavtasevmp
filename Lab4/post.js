document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    // Здесь можно добавить логику для отправки данных на сервер
    console.log('Форма отправлена:', { name, email });
});

