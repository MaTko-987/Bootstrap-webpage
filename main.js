
/* variables */
const name = document.getElementById('name');
const phoneNumber = document.getElementById('phoneNumber');
const date = document.getElementById('date');



function checkValidation() {
    /* name validation */

    if(name.value === ""){
    alert("You need to write your first and last name!");

    } else {
    return false;
    }

    /* phoneNumber validation */

    if (phoneNUmber === ""){
    alert("Phone number is missing!");
    } else {
    return false;
    }

    /*  date validation */

    if(date === ""){
    alert("You need to choose a date !");
    } else {
    return false;
    }


}
