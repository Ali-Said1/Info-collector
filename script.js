var ResponseName, ResponseAge, ResponseHobbie, ResponseGrade;
function Your_Name() {
  ResponseName = prompt("Enter Your Name: ", "Ex: Ali");
}
function Your_Age() {
  ResponseAge = prompt("Enter Your Age: ", "Ex: 18");
}
function Your_Hobbie() {
  ResponseHobbie = prompt("Enter Your Hobbie: ", "Ex: Football");
}
function Your_Grade() {
  ResponseGrade = prompt("Enter Your Grade: ", "Ex: Second Secondary");
}

var result = document.getElementById("result"),
  resultText;




const overlay = document.getElementById('overlay');
const popup  = document.getElementById('popup');


function openpopup(){
  popup.classList.add("active");
  overlay.classList.add("active");
  resultText = document.createTextNode(`  Name: ${ResponseName}
  Age: ${ResponseAge}
  Hobbie: ${ResponseHobbie}
  Grade: ${ResponseGrade}`);
  result.appendChild(resultText);
}
function closepopup(){
  popup.classList.remove("active");
  overlay.classList.remove("active");
  resultText= null;
  result.removeChild(resultText);
}
