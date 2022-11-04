//ex2
function displayStudentInfo(objUser){
    //destructuring
    const {first,last}=objUser;
    return `your full name is ${first} ${last}`
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


