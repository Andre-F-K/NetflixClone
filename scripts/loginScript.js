
document.getElementById("formID").addEventListener("submit", function(e){
        e.preventDefault();
})

function formValidate() {
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const passwordConf = document.getElementById('passwordConf').value;
    console.log(userName)
     let valid = false
    

    if (userName === " " || userName === '') {
        document.getElementById("userNameErrors").innerText = 'username cant be empty'
        
    } 
    else if(userName.length > 15 || userName.length < 6 ) {
        document.getElementById("userNameErrors").innerText += 'User Name must be between 6 and 15 characters'
        
    }
    else if(password !== passwordConf || password === ''){
        document.getElementById("userNameErrors").innerText = ''
        document.getElementById("passwordErrors").innerText = 'Passwords Incorrect'
        
    }
    else{
        document.getElementById("userNameErrors").innerText = ''
        document.getElementById("passwordErrors").innerText = '' 
        return true
    }
    valid = true
    console.log(valid)

    userObj = {
        name: userName
    }
    console.log(userObj)
    localStorage.setItem('userName', JSON.stringify(userObj))

    

    window.location.replace("home.html") 
}

function redirect(){
    window.location.replace("home.html") 
}
// window.location.replace("home.html")

