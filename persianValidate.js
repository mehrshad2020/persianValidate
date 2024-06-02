
/**
 * It receives a username and checks that it has at least one letter, one number and one underscore
 * The user name can only contain letters, numbers
 * @param {string} username - the username to validate
 * @returns {boolean} -True if the username is valid, false otherwise
 */

function validateUsernameRe(username){
    let regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*_)[a-zA-Z0-9_]+$/
   return regex.test(username)

}  


/**
 * validate url string
 * This function checks whether the input string is a valid URL or not
 * @param {string} url - the url to validate
 * @returns {boolean} -True if the url is valid, false otherwise
 */

function validateUrl(url){
    try{
        new URL(url)
        return true
    }
    catch(err){
        return false
    }
}

/**
 * This function checks if the input string must be 10 digits long
 * @param {string} code - The postal code to validate
 * @returns {boolean} - true if the code is valid, false otherwise
 */


function valiDatePostalCode(code){
    const regex = /^\d{10}$/
    return regex.test(code)
}


/**
 * validates an iranian phone number
 * This function confirms whether the phone number of an Iranian phone is valid or not
 * The phone number must start with 09 and the length of the phone number must be 11 digits, then 09 can be followed by 9 more digits
 * @param {string} number - The number to validate 
 * @returns {boolean} - true if the number is valid, false otherwise
 */

function valiDatePhoneNumber (number) {
    const regex = /^(09)(1[0-9]|3[0-9]|2[0-9])\d{7}$/

    return regex.test(number)
}

/**
 * validates a persian name
 * This function checks whether our input contains only Farsi characters, line, dot and space or not
 * @param {string} full_name - The full_name to validate 
 * @returns {boolean} - true if the full_name is valid, false otherwise
 */

function validatePersianName(full_name){
    const regex = /^[\u0600-\u06FF\s\.\-]+$/
    return regex.test(full_name)
}



/**
 * validate password
 * This function checks if our input is at least 8 characters long
 * At least one uppercase letter, one lowercase letter, one number and one special character
 * 
 * @param {string} password - The password to validate
 * @returns {boolean} -true if the password is valid, false otherwise
 */

function validatePassword(password){
    const isValidLen = password.length >= 8
    const hasUpperCase = /[A-z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumber = /[\d]/.test(password)
    const hasSymbol = /[\W_]/.test(password)

    if(isValidLen && hasUpperCase && hasLowerCase && hasNumber && hasSymbol){
        return true
    }
    else{
       return false
    }
}




/**
 * validate object
 * This function checks that the input is an object and not null
 * @param {object} obj - The obj to validate 
 * @returns {boolean} - true if the obj is valid, false otherwise
 */

function validateObject(obj){
    try{

        return typeof obj === "object" && obj !== null
    }
    catch(err){
       return err
    }
}



/**
 * validate an iranian national code
 * 
 * 
 * This function checks if the input is a valid Iranian national code with no
 * The national code must be exactly 10 digits and the law of the Iranian national code must be observed
 * @param {string} code - The code to validate 
 * @returns {boolean} - true if the code is valid, false otherwise
 */
function validateNationalCode(code){
    if(!/^\d{10}$/.test(code)){
        return false
    }
    const check =parseInt(code[9],10)
    let sum = 0
    for(let i =0; i<9;i++){
   
        sum+= parseInt(code[i],10) * (10 - i)
    }
    const remainder = sum%11
    console.log(remainder)
    if(remainder < 2){
      return  remainder === check
    }
    return (11 - remainder) === check
    
}


/**
 * validate a jalali (persain) date
 * 
 * 
 * This function checks whether the input is in Jalali date format with Farsi format YYYY/MM/DD or not
 * @param {string} inputDate - The inputDate to validate  
 * @returns {boolean} - true if the inputDate is valid, false otherwise
 */

function valiDateJalali(inputDate){
    const parts = inputDate.split('/')
    const year = parseInt(parts[0])
    const month = parseInt(parts[1])
    const day = parseInt(parts[2])
    if(isNaN(year) || isNaN(month) || isNaN(day)){
        return false
    }
    if(parts.length !== 3 || year === "" || month === "" || day === ""){
        return false
    }
  
    
    if(!(year >= 1000 && year <= 9999)){
        return false
    }
    if(!(month >= 1 && month <= 12)){
        return false
    }
    if(month > 6){
        if( day > 30){
            return false
        }
    }
    
    return true
}



function validateImageExtension(fileName){
    const validExtension = ["png","jpg"]
    const fileExtension = fileName.split(".").pop().toLowerCase()
    return validExtension.includes(fileExtension)

}


function validatefuction(func){
    return typeof func === "function"
}

function validateFileSize(file,maxSize=1024000){
    return file.size <= maxSize
}
function valiDateEmail(email){
    const regex = /^[\w-\.]+@([\w]+\.)[\w-]{2,4}$/
    console.log(regex.test(email))
}


function validateArray(array){
    return Array.isArray(array)
}
