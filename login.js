//log in
let form_login = document.querySelector('.login')
form_login.addEventListener('submit', async (e) => {
    e.preventDefault();
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;
    let alert = document.querySelector('.alert');

    let user = {
        email,
        password,
        returnSecureToken: true
    }


    const API_KEY = "AIzaSyBELVo1PU4L2TWew_59HJLrw5KF2YEqpVI";
    const base_url = "https://identitytoolkit.googleapis.com/v1";

    const response = await fetch(`${base_url}/accounts:signInWithPassword?key=${API_KEY}`, {
        method: 'POST',
        body: JSON.stringify(user)
        // headeres : {
        //     "Content-type" :"application/json",
        //     "Accept-language" : "en"
        // },
    });
    const result = await response.json();
    console.log(result);
    if (result?.error) {
        alert = Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${result?.error.message}`,
        })
    }
    else {
        
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        location.replace('/index.html');
    }
})