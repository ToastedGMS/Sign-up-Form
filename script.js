let check = () =>{
    if (document.getElementById('password').value === document.getElementById('confirmPassword').value){
        document.getElementById('password').style.borderColor = 'green';
        document.getElementById('confirmPassword').style.borderColor = 'green';
        document.getElementById('message').innerText = null;
    } else if (document.getElementById('password').value != document.getElementById('confirmPassword').value){
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('confirmPassword').style.borderColor = 'red';
        document.getElementById('message').innerText = 'Passwords do not match'
    }
}

