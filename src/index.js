const qSel = (qry) => document.querySelector(qry);

function capitalize(str) {
    function isAllUpperCase(word){
        return word.toUpperCase() === word;
    }

    return str.split(" ").map(word => {
        if (isAllUpperCase(word) || word.length <= 2) return word

        return word[0].toUpperCase() + word.substr(1).toLowerCase()
    }).join(" ");
}

function arrToUl(arr) {

    qSel('#skillList').innerHTML = '';

    arr.map(
        function (item) {
            const li = document.createElement('li');
            const ul = qSel("#skillList")

            li.appendChild(document.createTextNode(capitalize(item)))

            ul.appendChild(li)
        });
}


function displayMenu() {
    qSel('#navbar').style.display = 'block';
}

function hide(selector) {
    if (selector == '#navbar' && window.innerWidth < 1000 || selector != '#navbar') {
        qSel(selector).style.display = 'none';
    }
}

function displaySkills(skillName) {

    const skills = {
        JavaScript: ['conceitos básicos', 'escopos', 'closures', 'hoisting', 'promises', 'programação funcional', 'programação orientada a objetos'],
        Python: ['conceitos básicos', 'programação orientada a objetos', 'programação funcional'],
        Arduino: ['conceitos básicos', 'programação estruturada', 'soluções para automação em geral', 'eletrônica para microcontroladores'],
        React: ['componentes', 'manipulação do DOM com react', 'react hooks', 'props', 'react funcional', 'JSX com babbel compilado localmente', 'next.js'],
        HTML: ['HTML semântico', 'hierarquia de componentes', 'SEO', 'estruturação moderna de páginas web'],
        CSS: ['mobile first', 'media queries', 'seletores', 'animações com CSS', 'flexbox', 'responsividade']
    }

    qSel('.popup').style.display = 'block';
    qSel('#skillTitle').innerText = skillName;
    arrToUl(skills[skillName]);

}

addEventListener('resize',
    function () {
        if (window.innerWidth >= 1000) qSel('#navbar').style.display = 'block';
    });