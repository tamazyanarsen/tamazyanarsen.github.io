const items= [
    {
        type: 'success',
        text: 'Продукты сделки успешно добавлены'
    },
    {
        type: 'warning',
        text: 'Для перевода на следующий этап заполните обязательные поля'
    },
    {
        type: 'error',
        text: 'Для перевода на следующий этап заполните обязательные поля'
    },
];

const message = document.querySelector('tsc-message');
message.setAttribute('items', JSON.stringify(items));
message.addEventListener('items-change', (value) => console.log(value));
