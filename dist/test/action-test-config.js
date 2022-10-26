const actionEl = document.getElementById('action');
const actionEl2 = document.getElementById('action2');
const actionEl3 = document.getElementById('action3');
const actionEl4 = document.getElementById('action4');
const testMenu = [
    {
        header: 'Test Menu',
        items: {
            radio1: {
                type: 'RadioButton',
                value: 'test1',
                label: 'Проверка',
            },
        },
    },
];
const testMenu2 = [
    {
        header: 'Test Menu',
        items: {
            menu1_menu1: {
                type: 'Menu',
                value: 'Меню1.1',
            },
        },
    },
];

actionEl.options = [
    {
        header: 'test',
        items: {
            radio1: {
                type: 'RadioButton',
                value: '1',
                label: 'Да',
            },
            btn1: {
                type: 'Button',
                value: 'Экспортировать',
                imageSrc: '/assets/images/blue-calendar.svg',
            },
            btn2: {
                type: 'Button',
                value: 'Удалить',
            },
            radio2: {
                type: 'RadioButton',
                value: '2',
                label: 'Нет',
            },
        },
        useBottomSeparator: true,
    },
    {
        header: 'menu',
        items: {
            menu1: {
                type: 'Menu',
                value: 'Меню1',
            },
            menu2: {
                type: 'Menu',
                value: 'Меню2',
            },
        },
        useBottomSeparator: true,
    },
    {
        items: {
            input1: {
                type: 'Input',
                value: 'Test',
            },
        },
        useBottomSeparator: true,
    },
    {
        items: {
            input1: {
                type: 'Checkbox',
                label: 'Test',
                value: true,
            },
        },
    },
];

actionEl2.options = testMenu2;
actionEl3.options = testMenu;
actionEl4.options = testMenu;

actionEl.addEventListener('onInput', (e) =>
    console.log('input-value action: ', e)
);
