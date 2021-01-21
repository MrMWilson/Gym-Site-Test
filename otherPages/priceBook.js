function handleOnClick(){
    debugger;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const dayPref = document.getElementById("dayPref").value;
    const timePref = document.getElementById("timePref").value;

    if(firstName && lastName && email && dayPref && timePref !== ""){
        setInLocalStorage(firstName,lastName,email,dayPref,timePref);

        getFromLocalStorage();
        
    }else{
        document.getElementById("failure-text-location").textContent = "Please make sure to fill out all the fields before submitting."
    }
       
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

    document.getElementById(timeSlot).textContent = initials;
} 

