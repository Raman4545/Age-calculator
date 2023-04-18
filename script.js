const result = document.querySelector(".result");
result.innerHTML = `
        <div class="age-years"> <span >- -</span> years</div>
        <div class="age-months"><span >- -</span>months</div>
        <div class="age-days"><span >- -</span> days</div>
    `;



//code for validaitons
function validateForm() {
    var dayField = document.getElementById("day");
    var monthField = document.getElementById("month");
    var yearField = document.getElementById("year");

    var day = dayField.value;
    var month = monthField.value;
    var year = yearField.value;

    var errorMessage = "This field is required.";
    var dayErrorMessage = document.getElementById("day-error");
    var monthErrorMessage = document.getElementById("month-error");
    var yearErrorMessage = document.getElementById("year-error");

    if (day === "" & month=== "" & year==="") {
        dayErrorMessage.innerHTML = errorMessage;
        monthErrorMessage.innerHTML = errorMessage;
        yearErrorMessage.innerHTML = errorMessage;
        return false;
    } else {
        dayErrorMessage.innerHTML = "";
        monthErrorMessage.innerHTML = "";
        yearErrorMessage.innerHTML = "";
    }
   
    if (day === "") {
        dayErrorMessage.innerHTML = errorMessage;
        return false;
    } else {
        dayErrorMessage.innerHTML = "";
    }

    if (month === "") {
        monthErrorMessage.innerHTML = errorMessage;
        return false;
    } else {
        monthErrorMessage.innerHTML = "";
    }

    if (year === "") {
        yearErrorMessage.innerHTML = errorMessage;
        return false;
    } else {
        yearErrorMessage.innerHTML = "";
    }

    return true;
}


function calculateAge() {
    const today = new Date();
    const inputDate = new Date(document.getElementById("year").value, document.getElementById("month").value - 1, document.getElementById("day").value);

    let ageInDays = Math.floor((today - inputDate) / (1000 * 60 * 60 * 24));
    let ageInMonths = Math.floor(ageInDays / 30);
    let ageInYears = Math.floor(ageInMonths / 12);
    ageInMonths = ageInMonths % 12;
    ageInDays = ageInDays % 30;

    const result = document.querySelector(".result");
    result.innerHTML = `
        <div class="age-years"> <span >${ageInYears}</span> years</div>
        <div class="age-months"><span >${ageInMonths} </span>months</div>
        <div class="age-days"><span >${ageInDays}</span> days</div>
    `;
}


function submitIfValid() {
    if (validateForm()) {
        calculateAge();
    }
    return false;
}