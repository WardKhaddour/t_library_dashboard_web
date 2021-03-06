const submitBtn = document.getElementById("submit");
const loginForm = document.getElementById("loginForm");
submitBtn.addEventListener("click", logIn);

function validate(email, password) {
    if (email === '') {
        document.getElementById('emailAlert').innerHTML
            = 'Please Input Email';
    }
    if (password === '') {
        document.getElementById('passwordAlert').innerHTML
            = 'Please Input Password';
    }
    if (password.length < 6 && password != '') {
        document.getElementById('passwordAlert').innerHTML
            = 'Password should be at least 6 charechters';
    }
    if ((!email.includes('@')
        || !email.includes('.')) && email != '') {
        document.getElementById('emailAlert').innerHTML
            = 'Invalid Email';
    }
    if ((document.getElementById('emailAlert').innerHTML === ''
        && document.getElementById('passwordAlert').innerHTML === '')
    ) {
        return true;
    }
    return false;

}
loginForm.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
        logIn();
    }
    return;
});


async function logIn() {
    document.getElementById('emailAlert').innerHTML = '';
    document.getElementById('passwordAlert').innerHTML = '';
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (validate(email, password) === false) return;
    console.log("Valid!");
    try {
        const url = 'http://127.0.0.1:8000/api/loginAdmin';

        const data = {
            "email": email,
            "password": password,
        };
        const jsonData = JSON.stringify(data);
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: jsonData,
        });

        var msg = await response.json();
        if (response.status !== 200) {
            document.getElementById('emailAlert').innerHTML
                = msg;
            document.getElementById('passwordAlert').innerHTML
                = msg;
        } else {
            window.location.href = '../html/home.html';
        }
    } catch (e) {
        console.log('here is an error');
        alert('Please check your internet connection');
        console.log(e);
    }
}