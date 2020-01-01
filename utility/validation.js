export const allLetterWithSpace = (inputtxt) => {
    var letters = /^[a-zA-Z ]*$/;
    if (inputtxt.match(letters)) {
        return true;
    }
    return false;
}

export const emailAddress = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}

/* '+' sign before the number in the following way
+XX-XXXX-XXXX
+XX.XXXX.XXXX
+XX XXXX XXXX
*/
export const phonenumber = (inputtxt) => {
    var phoneno = /([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/;
    if (inputtxt.match(phoneno)) {
        return true
    } else {
        return false;
    }
}

/*
To check a password between 8 to 15 characters which contain at least one lowercase letter,
one uppercase letter, one numeric digit,
and one special character
*/
export const password = (inputtxt) => {
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (inputtxt.match(decimal)) {
        return true;
    } else {
        return false;
    }
}