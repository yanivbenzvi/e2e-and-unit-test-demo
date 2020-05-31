export class ValidForm {
    static validEmail(email) {
        if (email == null) {
            return 'Id is required'
        }
        return /.+@.+\..+/.test(email)
    }

    static checkIDLength(id) {
        return id.length === 9
    }

    static checkIdLastDigit(id) {
        let sum = 0, incNum
        for (const i in id) {
            incNum = Number(id[i]) * ((i % 2) + 1)  // Multiply number by 1 or 2
            sum += (incNum > 9) ? incNum - 9 : incNum  // Sum the digits up and add to total
        }
        return (sum % 10 === 0)
    }

    static validID(id) {
        if (id == null) {
            return 'Id is required'
        }

        if (!ValidForm.checkIDLength(id.toString())) {
            return 'Id should contain 9 digit'
        }

        if (!ValidForm.checkIdLastDigit(id.toString())) {
            return 'last digit does not fit to id pattern'
        }

        return true
    }

    static validPassword(password) {
        if (password == null) {
            return 'Password is required'
        }

        if (password.length < 6 || password.length > 8) {
            return 'Password length must be between 6-8'
        }
        //let smallLetterCount = 0, capitalLetterCount = 0, digitCount = 0
        // for (const letter in password) {
        //     if (letter >= 'a' && letter <= 'z') {
        //         smallLetterCount++
        //     } else if (letter >= 'A' && letter <= 'Z') {
        //         capitalLetterCount++
        //     } else if (letter >= '0' && letter <= '9') {
        //         digitCount++
        //     }
        // }
        const smallLetterCount   = password.split('').filter((letter) => letter >= 'a' && letter <= 'z').length
        const capitalLetterCount = password.split('').filter((letter) => letter >= 'A' && letter <= 'Z').length
        const digitCount         = password.split('').filter((letter) => letter >= '0' && letter <= '9').length

        if (smallLetterCount === 0 || capitalLetterCount < 1 || digitCount === 0) {
            return 'Password complexity does not meet the requirements'
        }
        return true
    }

    static validName(name) {
        let countSpace = 0
        if (name == null || name === '') {
            return 'Name is required'
        }

        for (const letter of name) {
            if (letter === ' ') {
                countSpace++
            }
        }

        if (countSpace < 1) {
            return 'Name should contain at least two words'
        }

        return true
    }
}