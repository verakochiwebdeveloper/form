let btnPass = document.querySelector('.--visable-js'),
    inputPass = document.querySelector('.--password-js');


btnPass.onClick = function () {
    if (inputPass.getAttribute('type') === 'password') {
        inputPass.qetAttribute('type', 'text');
        btnPass.classList.add('.--visible-active')
    } else {
        inputPass.getAttribute('type', 'password');
        btnPass.classList.remove('.--visible-active')
    }
}