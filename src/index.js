const selector = (query) => document.querySelector(query);

function toggle(id = '') {
    selector('nav').style.display = id === 'open' ? 'block' : window.innerWidth >= 1000 ? 'block' : 'none';
}

function sendEmail() {
    const templateParams = {
        email: selector('#email').value,
        message: selector('#message').value
    };

    selector('#email').value == '' || selector('#message').value == '' 
    ? (
        selector('.alertText').style.display = 'inline'
    ) : (
        emailjs.send('service_tlpzmid', 'template_pzugx8q', templateParams, 'user_lHJX3hZVlXs7uoZhETxk5')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            }),

            selector('#email').value = '',
            selector('#message').value = '',
            selector('.alertText').style.display = 'none'
        )
}

addEventListener('resize', () => { toggle('nav') })