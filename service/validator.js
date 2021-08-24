class Validation {
    static user(input, message) {
        if (input == null || input.trim() == '' || input == "") {

            throw new Error(message)
        }
    }
    static email(input, message) {
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)) {
            throw new Error(message)
        }
    }
    static password(input, message) {
        if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(input)) {
            throw new Error(message)
        }
    }
}