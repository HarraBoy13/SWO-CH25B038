let opentab;
opentab = "lgn";
document.getElementById(opentab).style.display = "block";
document.getElementById("rgsr").style.display = "none";

function openTab(id) {
    document.getElementById(id).style.display ="block";
    if (id!=opentab) {
        document.getElementById(opentab).style.display = "none";
    }
    opentab = id;
}

function validateForm() {
  let x = document.forms["myForm"]["pwd"].value;
  let y = document.forms["myForm"]["repwd"].value;
  if (x != y) {
    alert("Passwords must match");
    returnToPreviousPage();
    return false;
  }
}