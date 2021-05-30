'use strict'

const millons = "M"
const billions = "B"
const trillions = "T"

//METHODS
/**
 * Function start prettifying
 * @param {*} req 
 * @param {*} res 
 */
function prettifyNumber(req, res) {
    // Verify that de JSON request its fine structure {number:x}
    if (req.body.number) {
        let response = prettifyingNumber(req.body.number);
        res.status(response.status).send(response.body);
        
    } else {
        //If it´s a bad request
        res.status(400).send("Bad Request")
    }

}

/**
 * Function for prettifying the input number
 * @param {*} number 
 * @returns 
 */
function prettifyingNumber(number) {
    if (isNaN(number)) {
        return setResponse(400,"Request isn't a number");
    } else {
        //Remove the decimals in the number
        let numberString = number.toString();
        numberString = numberString.split(".", 1)[0];
        //Verify the length of the number if it´s less or equal than 6 digits returns the same number
        if (numberString.length <= 6) {
            return setResponse(200,numberString);
            //Verify the length of the number if it´s less or equal than 9 digits returns on millions  
        } else if (numberString.length <= 9) {
            return setResponse(200,getTruncadeNumber(numberString,millons));
            //Verify the length of the number if it´s less or equal than 12 digits returns on billions  
        } else if (numberString.length <= 12) {
            return setResponse(200,getTruncadeNumber(numberString,billions));
            //Verify the length of the number if it´s less or equal than 15 digits returns on trillions  
        } else if (numberString.length <= 15) {
            return setResponse(200,getTruncadeNumber(numberString,trillions));
        } else {
            return setResponse(400,"The number specified its out of range");
        }
    }
}

/**
 * Setter of the response object
 * @param {*} statusInput 
 * @param {*} bodyInput 
 * @returns 
 */
function setResponse(statusInput,bodyInput){
    let response ={
        status:statusInput,
        body: bodyInput
    }
    return response;
}

/**
 * Truncates the string number
 * @param {*} type 
 * @returns 
 */
function getTruncadeNumber(numberString,type){
    let secondChar = numberString.charAt(1) ==="0"?"":"." + numberString.charAt(1);
    return (numberString.charAt(0) + secondChar + type);
}

//EXPORTS METHODS
module.exports = {
    prettifyNumber,
    prettifyingNumber,
    setResponse,
    getTruncadeNumber
}