function handleOnClick(){
    debugger;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const dayPref = document.getElementById("dayPref").value;
    const timePref = document.getElementById("timePref").value;

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
    
    const firstName = localStorage.getItem("FirstName");
    const lastName = localStorage.getItem("LastName");
    const dayPref = localStorage.getItem("DayPref");
    const timePref = localStorage.getItem("TimePref");

    fillTable(firstName,lastName,dayPref,timePref)
}

function fillTable(firstName,lastName,dayPref,timePref){

    const initials = `${firstName.charAt(0)}.${lastName.charAt(0)}`;
    const timeSlot = `${dayPref}${timePref}`;

    document.getElementById(timeSlot).innertext = initials;

    

} 

//THIS ALL STILL NEEDS A CATCH FOR ERRORS OR IF A VALUE IS EMPTY