import {compose} from 'redux'
function removeSpace(string){
    return string.split(" ").join("");
}

function repeatString(string){
    return string.repeat(2);
}

function convertToUpperCase(string){
    return string.toUpperCase();
}
// console.log(convertToUpperCase(repeatString(removeSpace("Najeeb Rahman Ansari"))));


const composeFunction = compose(removeSpace, repeatString, convertToUpperCase)
// console.log(composeFunction("Najeeb Rahman"));
