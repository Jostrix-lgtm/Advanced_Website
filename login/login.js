document.getElementById("loginBtn").addEventListener('click', function(){
    // email input 
    const nameField = document.getElementById('username');
    const username = nameField.value;
    
    // password
    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    // verification
    if (username === "abcd" && password === "1234"){
        window.location =("../home/homepage.html")
    }
    else{
        alert("Your Username or password is incorrect!!")
    }
})