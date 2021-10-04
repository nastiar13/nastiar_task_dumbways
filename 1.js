// Check Username
const checkUsername = (username) => {
    let validation = false;
    if(username.length === 6) {
        validation = true
    }
    username.split("").forEach( e => {
        if( e === e.toUpperCase()) {
            validation = false
        }
    })

    console.log(validation === true ? "valid" : "invalid");
    
}

// Check Email

const checkEmail = (email) => {
    let validation = false
    email.split("").forEach(e => {
        if(e === "@") {
            validation = true
        }
    })
    console.log(validation === true ? "valid" : "invalid")
}



// Check Password
const checkPassword = (pass) => {
    let validation = false;
    let number;
    let upperCase;   
    pass.split("").forEach( e => {
        if( e === e.toUpperCase() && Boolean(e) !== isFinite(e)) {
            upperCase = e
        }if(isFinite(e)) {
            number = e
        }
    })
    if(pass.length >= 8 && Boolean(number) === true && Boolean(upperCase) === true) {
        validation = true
    }
    
    console.log(validation === true ? "valid" : "invalid");
}


const username = "Kamusiapa"
const email = "kamusiapa@gmail.com"
const password = "‘Kamusiapa2169’"



checkUsername(username)
checkEmail(email)
checkPassword(password)
