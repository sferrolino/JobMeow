const saveBtn = document.querySelector("#save");
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const name = document.querySelector("#name");
const email = document.querySelector('#email');
const dob = document.querySelector('#dob');
const education = document.querySelector("#education");
const bio = document.querySelector('#bio');
const field = document.querySelector('#field');
const tags = document.querySelector("#tags");

function saveStaticDataToFile() {
  var blob1 = new Blob([username.value+"\n"+name.value+"\n"+email.value+"\n"+dob.value+"\n"+field.value+"\n"+tags.value],{ type: "text/plain;charset=utf-8" });
  saveAs(blob1, "profile.txt");
  var blob2 = new Blob([username.value+"\n"+password.value],{ type: "text/plain;charset=utf-8" });
  saveAs(blob2, "accountinfo.txt");
  location.replace("index.html");
  alert("Information saved");
}
saveBtn.addEventListener("click",saveStaticDataToFile);