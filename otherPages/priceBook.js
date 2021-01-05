function handleOnClick(){
    
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let dayPref = document.getElementById("dayPref").value;
    let timePref = document.getElementById("timePref").value;

    setInLocalStorage(firstName,lastName,email,dayPref,timePref);
    getFromLocalStorage();
}

function setInLocalStorage(firstName,lastName,email,dayPref,timePref){
    
    localStorage.setItem("FirstName", firstName);
    localStorage.setItem("LastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("DayPref", dayPref);
    localStorage.setItem("TimePref", timePref);
}

function getFromLocalStorage(){
    
    let firstName = localStorage.getItem("FirstName");
    let lastName = localStorage.getItem("LastName");
    let dayPref = localStorage.getItem("DayPref");
    let timePref = localStorage.getItem("TimePref");

    fillTable(firstName,lastName,dayPref,timePref)
}

function fillTable(firstName,lastName,dayPref,timePref){

    const initials = `${firstName.charAt(0)}.${lastName.charAt(0)}`;
    const timeSlot = `${dayPref}${timePref}`;

    document.getElementById(timeSlot).innerText = initials;

} 

//THIS ALL STILL NEEDS A CATCH FOR ERRORS OR IF A VALUE IS EMPTY