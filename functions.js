"use strict";


function isHometown(town){
    const hometown = 'Townsville'
    
    if (town === 'Townsville'){
        return true;
    }   else {
        return false
    }
}


function getFullName(firstName, lastName){
    const message = `Hello ${firstName} ${lastName}!`;
    return message
}



function calculateTotal(basePrice, state, tax=0.05){
    
    const subtotal = basePrice * (1 + tax);
    let fee = 0;
    if (state === 'CA'){
        fee = 0.03 * subtotal;
    }else if (state === 'PA'){
        fee = 2;
    }else if (state === 'MA') {
        if (basePrice <= 100)
            fee = 1;
        else {
            fee = 3;
        }
    }
    return subtotal + fee;
    

}
