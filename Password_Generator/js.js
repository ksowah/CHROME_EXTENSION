const pwEl = document.getElementById("pw")
const copyEl = document.getElementById("copy")
const lenEl = document.getElementById("len")
const upperEl = document.getElementById("upper")
const lowerEl = document.getElementById("lower")
const numberEl = document.getElementById("number")
const symbolEl = document.getElementById("symbol")
const generateEl = document.getElementById("generate")


// possible password characters for passwrd
const upperLetters = "QWERTYUIOPLKJHGFDSAZXCVBNM" 
const lowerLetters = "qwertyuioplkjhgfdsazxcvbnm"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+`?>*"

// returns a random uppercase letter
function getUppercase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

// returns a random lower case letter
function getLowercase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]

}

// returns a random number
function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)]

}

// returns a random symbol
function getSymbols(){
    return symbols[Math.floor(Math.random() * symbols.length)]

}

/* generates password based on checked boxes ensuring at least one of the elements checked are present in the password */
function generatePassword(){
    let password = ''
    const len = lenEl.value

    if(upperEl.checked){
       password += getUppercase()
    }

    if(lowerEl.checked){
       password += getLowercase()
    }

    if(number.checked){
        password += getNumber()
    }

    if(symbolEl.checked){
       password += getSymbols()
    }

    if(password.length > lenEl.value) return ""

    if(lenEl.value > 40){
        alert("You have exceeded a maximum of 40 characters")
        return ""
    }


    for(let i = password.length; i < len ; i++){
        const x = generateX()
        password += x
    }

    pwEl.innerText = password
}

// see if an element has been checked and stores it in an array
function generateX(){
    const xs = []
    if(upperEl.checked){
        xs.push(getUppercase())
    }

    if(lowerEl.checked){
        xs.push(getLowercase())
    }

    if(number.checked){
        xs.push(getNumber())
    }

    if(symbolEl.checked){
        xs.push(getSymbols())
    }

    if(xs.length === 0){
        return ""
    }

    return xs[Math.floor(Math.random() * xs.length)]
}

// geenerate password button
generateEl.addEventListener("click", generatePassword)

// onclick, copies the password generated
copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const password = pwEl.innerText

    if(!password){
        return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("Password copied to clipboard")
})
