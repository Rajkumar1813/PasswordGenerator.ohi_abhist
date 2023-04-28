const result = document.getElementById('result');
const length = document.getElementById('length');
const upperCase = document.getElementById('upperCase');
const lowerCase = document.getElementById('lowerCase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generateButton = document.getElementById('generateButton');

const generateUpper = ()=>{
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
const generateLower = ()=>{
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}
const generateNumber = ()=>{
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
const generateSymbol = ()=>{
    const symbols = `~!@#$%^&*()_./[]{}`;
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (password = '') => {
    if(upperCase.checked){
        password += generateUpper();
    }
    if(lowerCase.checked){
        password += generateLower();
    }
    if(numbers.checked){
        password += generateNumber();
    }
    if(symbols.checked){
        password += generateSymbol();
    }
    if(password.length < length.value){
        return generatePassword(password);
    }
    result.innerText = password.substr(0,length.value);
    console.log(password.substr(0,length.value));
}

// generatePassword();

generateButton.addEventListener('click',()=>{
    generatePassword();
})