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
  ResponseGrade = prompt("Enter Your Grade: ", "");
}



const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");

function openpopup() {
  popup.classList.add("active");
  overlay.classList.add("active");

  if(Math.trunc(ResponseName) == "" || ResponseName == null){
    document.getElementById("resultname").style.display = "none"
  } else{
    document.getElementById("resultname").style.display = "block"
  document.getElementById("resultname").innerHTML =
  "Name: " +
  ResponseName +
  "<br/>"}
  if(Math.trunc(ResponseAge) == "" || ResponseAge == null){
    document.getElementById("resultage").style.display = "none"
  }else{
    document.getElementById("resultage").style.display = "block"
  document.getElementById("resultage").innerHTML =
  "Age: " +
  ResponseAge +
  "<br/>"}
  if(Math.trunc(ResponseHobbie) == "" || ResponseHobbie == null){
    document.getElementById("resulthobbie").style.display= "none"
  }else{
    document.getElementById("resulthobbie").style.display= "block"
  document.getElementById("resulthobbie").innerHTML =
  "Hobbie: " +
  ResponseHobbie +
  "<br/>"}
  if(Math.trunc(ResponseGrade) == "" || ResponseGrade == null){
    document.getElementById("resultgrade").style.display = "none"
  }else{
    document.getElementById("resultgrade").style.display = "block"
  document.getElementById("resultgrade").innerHTML =
  "Grade: " +
  ResponseGrade +
  "<br/>"}
  if((ResponseName == null || Math.trunc(ResponseName) == "") && (ResponseAge == null || Math.trunc(ResponseAge) == "") && (ResponseHobbie == null || Math.trunc(ResponseHobbie) == "") && (ResponseGrade == null || Math.trunc(ResponseGrade) == "")){
    document.getElementById('popup').appendChild(addedp);
    addedp.innerText= "No data entered"
  }
}
const addedp = document.createElement('p')
function closepopup() {
  popup.classList.remove("active");
  overlay.classList.remove("active");
  addedp.innerText = "";
  delete addedp;
}
