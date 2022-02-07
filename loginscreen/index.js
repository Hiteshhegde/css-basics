const button = document.querySelector('.login-btn');
var username = document.getElementById('email');
var password = document.getElementById('password');

button.addEventListener('click', () => {
    if (username || password){
        alert (`You entered ${username.value} and ${password.value}`);
    console.log(username.value,password.value);
    }
    else {
        console.log('Nothing found');
    }
});

 







