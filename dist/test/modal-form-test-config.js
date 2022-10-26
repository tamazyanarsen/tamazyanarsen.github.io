/* eslint-disable max-lines-per-function */
const table = document.getElementById('add-table');
const columns = [
    {
        label: 'Краткое наименование',
        itemProperty: 'shortName',
        type: 'text'
    },
    {
        label: 'Страна резиденства',
        itemProperty: 'country',
        type: 'text'
    },
    {
        label: 'ОПФ',
        itemProperty: 'opf',
        type: 'text'
    },
    {
        label: 'ИНН',
        itemProperty: 'inn',
        type: 'text'
    },
    {
        label: 'КПП',
        itemProperty: 'kpp',
        type: 'text'
    },
    {
        label: 'TIN',
        itemProperty: 'tin',
        type: 'text'
    },
    {
        label: 'Отрасль',
        itemProperty: 'industry',
        type: 'text'
    },
    {
        label: 'Официальное наименование',
        itemProperty: 'name',
        type: 'text'
    },
    {
        label: 'Бизнес единица',
        itemProperty: 'buisnessVal',
        type: 'text'
    },
];
let items = new Array(20).fill(1).map((e, index) => {
    return {
        id: index,
        shortName: {
            value: `Краткое наименование${index}`
        },
        country: {
            value: `Страна резиденства${index}`
        },
        opf: {
            value: `ОПФ${index}`
        },
        inn: {
            value: `ИНН${index}`
        },
        kpp: {
            value: `КПП${index}`
        },
        tin: {
            value: `TIN${index}`
        },
        industry: {
            value: `Отрасль${index}`
        },
        name: {
            value: `Официальное наименование${index}`
        },
        buisnessVal: {
            value: `Бизнес единица${index}`
        },

    };
});
table.setAttribute('columns', JSON.stringify(columns));
table.setAttribute('items', JSON.stringify(items));


const fields = [
    {
        type: 'text',
        itemProperty: 'shortName',
        placeholder: 'Краткое наименование'
    },
    {
        type: 'list',
        itemProperty: 'country',
        listOptions: [
            {
                value: 1,
                label: 'Россия'
            },
            {
                value: 2,
                label: 'Турция'
            }
        ],
        placeholder: 'Страна резиденства'
    },
    {
        type: 'list',
        itemProperty: 'opf',
        listOptions: [
            {
                value: 1,
                label: '1'
            },
            {
                value: 2,
                label: '2'
            }
        ],
        placeholder: 'ОПФ'
    },
    {
        type: 'text',
        itemProperty: 'inn',
        placeholder: 'ИНН',
    },
    {
        type: 'text',
        itemProperty: 'kpp',
        placeholder: 'КПП',
    },
    {
        type: 'text',
        itemProperty: 'tin',
        placeholder: 'TIN',
    },
    {
        type: 'list',
        itemProperty: 'industry',
        listOptions: [
            {
                value: 1,
                label: '1'
            },
            {
                value: 2,
                label: '2'
            }
        ],
        placeholder: 'Отрасль'
    },
    {
        type: 'list',
        itemProperty: 'name',
        listOptions: [
            {
                value: 1,
                label: '1'
            },
            {
                value: 2,
                label: '2'
            }
        ],
        placeholder: 'Официальное наименование'
    },
    {
        type: 'text',
        itemProperty: 'buisnessVal',
        placeholder: 'Бизнес единица',
    },
];

const formConfig = {
    defaultColumns: 2,
    groups: [
        {
            fields: fields
        }
    ]
};


const modalConfig = {
    header: {
        show: true,
        text: 'Добавление компании'
    },
    footer: {
        buttons: [
            {
                id: 'cancel',
                label: 'Отменить',
                style: 'Flat',
                size: 'S',
            },
            {
                id: 'add',
                label: 'Добавить',
                style: 'Default',
                size: 'S',

            }
        ]
    }
};

table.showActionPanel = true;
table.addEventListener('add-item-button-click', () => {
    modal.open = true;
});

const modal = document.getElementById('add-modal');
let newItem;

modal.config = modalConfig;
modal.formConfig = formConfig;

modal.addEventListener('form-change', (event) => {
    const value = event.detail.value;
    const newObj = Object.keys(value).reduce((acc,key) => {
        acc[key] = {value: value[key]};
        return acc;
    }, {});
    newItem = {...newObj, id: items.length};
});
modal.addEventListener('add-button-click', () => {
    table.items = [...table.items, newItem];
    modal.open = false;
});


