// Codeland Username Validation Question
// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

const userValidation = (str) => {
     if(str.length >= 4 && str.length <= 25 && (/[a-zA-Z]/).test(str.slice(0,1)) /* alternative str.charAt(0) */ && (/^\w+$/).test(str) && (/[a-zA-Z0-9]/).test(str.slice(-1)) /* alternative str.charAt(str.length -1) */) {
          return true;
     }else {
          return false;
     }
};

console.log(userValidation("u__hello_world123"));