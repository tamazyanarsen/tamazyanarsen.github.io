const colors = [
    {textBackground: "#F0E9FF", textColor: "#7232CC"},
    {textBackground: "#D6ECFF", textColor: "#006BC9"},
    {textBackground: "#D7F0F7", textColor: "#0085B0"},
    {textBackground: "#D7F7DD", textColor: "#00942C"},
    {textBackground: "#FFF3C2", textColor: "#D08000"},
    {textBackground: "#FFE7D1", textColor: "#E55C00"},
    {textBackground: "#FFE1DE", textColor: "#C91A0A"},
    {textBackground: "#E9EDF2", textColor: "#596774"},
];
const priorities = ['low', 'mid', 'high'];
const el = document.querySelector("tsc-table");
const columns = [
    {
        label: "",
        itemProperty: "checkbox",
        type: 'checkbox',
        width: '50px'
    },
    {
        label: "Текст",
        itemProperty: "text",
        type: 'text'
    },
    {
        label: "Список",
        itemProperty: "list",
        type: 'list',
        listOptions: [
            {label: "вариант 1", value: "val1"},
            {label: "вариант 2", value: "val2"},
        ],
        listInitOption: "val2"
    },
    {
        label: "Инпут",
        itemProperty: "input",
        type: 'input'
    },
    {
        label: "Тэг",
        itemProperty: "tag",
        type: 'tag'
    },
    {
        label: "Ссылка",
        itemProperty: "link",
        type: 'link'
    },
    {
        label: "Дата",
        itemProperty: "date",
        type: "date"
    },
    {
        label: "Приоритет",
        itemProperty: "priority",
        type: "priority"
    },
    {
        label: "Свитч",
        itemProperty: "switch",
        type: "switch"
    },
    {
        label: "Иконка",
        itemProperty: "iconWithLabel",
        type: "icon"
    },
    {
        label: "",
        itemProperty: "icon",
        type: "icon",
        width: '64px'
    },
];
const items = new Array(20).fill(1).map((e, index) => {
    const colorRandom = Math.floor(Math.random() * colors.length);
    return {
        id: index,
        text: {
            value: `text${index}`
        },
        list: {
            value: Math.round(Math.random() * 100),
            disabled: Math.random() < 0.4
        },
        input: {
            value: Math.round(Math.random() * 100)
        },
        tag: {
            value: `tag${index}`,
            textBackground: colors[colorRandom].textBackground,
            textColor: colors[colorRandom].textColor
        },
        link: {
            label: `link${index}`,
            value: `#${index}`
        },
        date: {
            value: new Date(),
            isWarning: Math.random() < 0.4
        },
        priority: {
            label: `priority${index}`,
            value: priorities[Math.floor(Math.random() * priorities.length)]
        },
        switch: {
            label: `switch${index}`,
            value: Math.random() < 0.4,
            disabled: Math.random() < 0.4
        },
        iconWithLabel: {
            label: `icon${index}`,
            iconSVG: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<circle cx="12" cy="12" r="12" fill="#E9EDF2"/>\n' +
                '<path d="M13.2715 7.0127V17H11.624V8.96777L9.18359 9.79492V8.43457L13.0732 7.0127H13.2715Z" fill="#21272C"/>\n' +
                '</svg>'
        },
        icon: {
            iconSVG: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M12 3L14.4334 8.65067L20.5595 9.21885L15.9374 13.2793L17.2901 19.2812L12 16.14L6.70993 19.2812L8.06263 13.2793L3.44049 9.21885L9.56657 8.65067L12 3Z" stroke="#99A5B3" stroke-width="2" stroke-linejoin="round"/>\n' +
                '</svg>'
        },
        checkbox: {
            value: false
        },
    }
});
el.setAttribute("columns", JSON.stringify(columns));
el.setAttribute("items", JSON.stringify(items));
