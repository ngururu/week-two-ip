const Days_Of_The_Week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Male_Names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const Female_Names = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function CalculateNameAndDay (century, year, month, day, gender){
var indexDayOfTheWeek = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
var dayOfBirth = Days_Of_The_Week[indexDayOfTheWeek];

var name = null;
if (Gender === 'm') {
  name = Male_Names[indexDayOfTheWeek];
}else if (Gender === 'f') {
  name = Female_Names[indexDayOfTheWeek];
}else{
  alert("Input correct Gender");
}
    var output = [dayOfBirth, name];
    return output;    
}

function userInput() {
var year = parseInt(prompt("What is your year of birth?"));
var month = parseInt(prompt("Input the Month"));
var day = parseInt(prompt("What is your day of birth?"));
var gender = prompt("Enter your gender (m/f)");
var century = year.toString().substring(0,2);

CalculateNameAndDay(century, year, month, day, gender);
}