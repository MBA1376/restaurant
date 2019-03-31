const validator = require('validator');
const isEmpty = require('./is-empty');

const validateRegisterInput = (data) => {
    let errors = {};
    data.email = isEmpty(data.email) ? '' : data.email;
    data.password = isEmpty(data.password) ? '' : data.password;
    data.password2 = isEmpty(data.password2) ? '' : data.password2;


    /**validation for email */
    if(!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    if(validator.isEmpty(data.email)) {
        errors.email = 'email field is required';
    }

    /**validation for password */
    if(!validator.isLength(data.password , {min : 6 , max : 30})) {
        errors.password = 'Password must be at least 6 characters';
    }
    if(validator.isEmpty(data.password)) {
        errors.password = 'password field is required';
    }

    /**validation for password2 */
    if(!validator.equals(data.password , data.password2)) {
        errors.password2 = 'Passwords must match';
    }
    if(validator.isEmpty(data.password2)) {
        errors.password2 = 'confirm password field is required';
    }
    
    return {
        errors ,
        isValid : isEmpty(errors)
    }
}

module.exports = validateRegisterInput ;