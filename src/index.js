const qSel = (qry) => document.querySelector(qry);

function displayMenu() {
    qSel('#navbar').style.display = 'block';
}

function closeMenu() {
    if (!window.matchMedia('(min-width: 1000px)').matches) qSel('#navbar').style.display = 'none';
}

addEventListener('resize',
    function () {
        if (window.matchMedia('(min-width: 1000px)').matches) qSel('#navbar').style.display = 'block';
    }
)