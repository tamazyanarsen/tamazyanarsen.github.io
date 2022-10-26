const items = new Array(20).fill(1).map((e, index) => {
    return { index };
});

const paginator = document.querySelector('tsc-paginator');
paginator.setAttribute('total-records', items.length);
paginator.addEventListener('page-change', (page) => console.log(page.detail));
