function handleOnClick(){
    
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let dayPref = document.getElementById("dayPref").value;
    let timePref = document.getElementById("timePref").value;

    setInLocalStorage(firstName,lastName,email,dayPref,timePref);
    
}

function setInLocalStorage(firstName,lastName,email,dayPref,timePref){
    
    localStorage.setItem("FirstName", firstName);
    localStorage.setItem("LastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("DayPref", dayPref);
    localStorage.setItem("TimePref", timePref);
}

function getFromLocalStorage(){
    
    let firstName = localStorage.setItem("FirstName");
    let lastName = localStorage.setItem("LastName");
    let dayPref = localStorage.setItem("DayPref");
    let timePref = localStorage.setItem("TimePref");

    fillTable(firstName,lastName,dayPref,timePref)
}

function fillTable(firstName,lastName,dayPref,timePref){

    const initials = `${firstName.value[0]}.${lastName.value[0]}`;
    const timeSlot = `${dayPref}${timePref}`;

    document.getElementById(timeSlot).value = initials;

} 