function handleOnClick() {
    debugger;
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