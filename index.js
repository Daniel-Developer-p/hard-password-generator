let genPassword = (len) => {
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+";

    let password = "";
    for (let i = 0; i < len; i++) {
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return password;
}

console.log(genPassword(10)) // len of your password