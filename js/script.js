const Days_Of_The_Week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Male_Names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const Female_Names = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function CalculateNameAndDay (century, year, month, day, gender){
var indexDayOfTheWeek = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
var dayOfBirth = Days_Of_The_Week[indexDayOfTheWeek];

var name = null;
if (gender === 'm') {
  name = Male_Names[indexDayOfTheWeek];
}else if (gender === 'f') {
  name = Female_Names[indexDayOfTheWeek];
}else{
  alert("Input correct Gender");
}
    var output = [dayOfBirth, name];
    return output;    
}

function userInput() {
var year = validator(parseInt(prompt("What is your year of birth?")), "Y");
var month = validator(parseInt(prompt("Input the Month")), "M");
var day = validator(parseInt(prompt("What is your day of birth?")), "D");
var gender = validator(prompt("Enter your gender (m/f)"), "G");
var century = year.toString().substring(0,2);

var userDetails = CalculateNameAndDay(century, year, month, day, gender);

var userDetailsElement = document.getElementById("akanName");
userDetailsElement.innerHTML = "You were born on: " + userDetails[0] + " your Akan name is: " + userDetails[1];

}

function validator(value, type){
switch(type){
    case "Y":
    if (value > 2022 || value < 1900){
      alert("Invalid year");
    }
    break;
    case "M":
    if (value > 12 || value <= 0){
      alert("Invalid month");
    }
    break;
    case "D":
    if (value > 31 || value <= 0){
      alert("Invalid day");
    }
    break;
    case "G":
    if (value !== "m" || value !== "f"){
      alert("Invalid gender");
    }
    break;
    default:
      console.log();
}

}