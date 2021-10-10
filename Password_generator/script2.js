var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-_=+\|/?';
var uppercase = document.getElementById("uppercase");
var lowercase = document.getElementById("lowercase");
var numbers = document.getElementById("numbers");
var specialcharacters = document.getElementById("special-characters");
const random = (length = 8) => {
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return str;
    
};

function test() {
    document.getElementById("form").style="opacity: 0";
    var x = document.getElementById("quantity").value; 
    if (uppercase.checked == true && lowercase.checked == true && numbers.checked == true && specialcharacters.checked == true) {
        chars = '';
        alert("We cannot generate a password because you have excluded all the characters.");
    }
    else if (uppercase.checked == true && lowercase.checked == true && numbers.checked == true) {
        chars = '!@#$%^&*-_=+\|/?';
    }
    else if (uppercase.checked == true && lowercase.checked == true && specialcharacters.checked == true) {
        chars = '0123456789';
    }
    else if (uppercase.checked == true && numbers.checked == true && specialcharacters.checked == true) {
        chars = 'abcdefghijklmnopqrstuvwxyz';
    }
    else if (lowercase.checked == true && numbers.checked == true && specialcharacters.checked == true) {
             chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
             }
    else if (uppercase.checked == true && lowercase.checked == true) {
             chars = '0123456789!@#$%^&*-_=+\|/?';
             } 
    else if (uppercase.checked == true && numbers.checked == true) {
             chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*-_=+\|/?';
             }
    else if (uppercase.checked == true && specialcharacters.checked == true) {
             chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
             }
    else if (lowercase.checked == true && numbers.checked == true) {
             chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*-_=+\|/?';
             }
    else if (lowercase.checked == true && specialcharacters.checked == true) {
             chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
             } 
    else if (numbers.checked == true && specialcharacters.checked == true) {
             chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
             }
    else if (uppercase.checked == true) {
             chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-_=+\|/?';
             }
    else if (lowercase.checked == true) {
             chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-_=+\|/?';
             }    
    else if (numbers.checked == true) {
             chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*-_=+\|/?';
             }
    else if (specialcharacters.checked == true) {
             chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
             }    
    else {
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-_=+\|/?';    
    }
    if (x < 8) {
        alert("you need to select a number of characters for the password between 8 and 128.");
        document.getElementById("password").innerHTML = "";
    }
    else {
        document.getElementById("password").innerHTML = random(x);
    }
}
function test2() {
    document.getElementById("form").style="opacity: 1"
}