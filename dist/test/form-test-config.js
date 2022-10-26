const formEl = document.getElementById('form');
const cardEl = document.getElementsByClassName('card-container')[0];

cardEl.style.cssText = `
    padding: 16px 24px 24px;
    background: #FFFFFF;
    border-radius: 6px;
    width: 1142px;
    box-shadow: 0 0 calc(var(--base-size) * 55 / 4) rgba(33, 39, 44, 0.1);
    margin: auto;
`;

const fields = [
    {
        type: 'text',
        placeholder: 'Фамилия'
    },
    {
        type: 'text',
        placeholder: 'Имя',
        outline: true
    },
    {
        type: 'text',
        placeholder: 'Отчество',
        outline: true
    },
    {
        type: 'date',
        dateFormat: 'DD.MM.YY',
        placeholder: 'Дата мероприятия',
        selectedDate: '2022-10-22',
        outline: true
    },
    {
        type: 'text',
        placeholder: 'Номер телефона',
        outline: true,
        mask: '+7 (___) ___ __-__!',
        maskSlot: '_'
    },
    {
        type: 'list',
        listOptions: [
            {
                value: 1,
                label: 'Мужской'
            },
            {
                value: 2,
                label: 'Женский'
            }
        ],
        outline: true,
        placeholder: 'Выберите пол'
    },
    {
        type: 'boolean',
        label: 'Согласен получать рассылку'
    },
    {
        type: 'boolean',
        label: 'Прочитал пользовательское соглашение',
        initialSatate: true,
        disabled: true
    }
];

const formConfig = {
    defaultColumns: 3,
    groups: [
        {
            fields: fields
        },
        {
            useAccordionWrapper: true,
            title: 'Дополнительная информация',
            fields: fields
        }
    ]
};

formEl.config = formConfig;
// formEl.columns = 3;