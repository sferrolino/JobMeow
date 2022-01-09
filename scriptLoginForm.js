const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginBtn = document.querySelector("#logginButton");
// function check(){
//   var count = 0;
//   var readFile = new XMLHttpRequest();
//   readFile.open("GET", "accountinfo.txt", false);
//   readFile.onreadystatechange = function (){
//     if(readFile.readyState === 4){
//       if(readFile.status === 200 || readFile.status == 0){
//         var userpass = readFile.responseText;
//         var values = userpass.split("\n");
//           for(var i =0; i<= values.length-1;i=i+2){
//             if (username.value == values[i] && password.value == values[i+1]) {
//               alert("Welcome");
//               location.replace("profile.html");
//                count+=1;
//                break;
//             }
//           }
//           if(count == 0){
//             alert("incorrect username/password");
//             }
//           }
//         }
//     }
//   if(count!=0){
//   var blob1 = new Blob([username.value],{ type: "text/plain;charset=utf-8" });
//    saveAs(blob1, "currentUser.txt");
//   }
//   count=0;
//   readFile.send(null);
// }

function check(){
  var count = 0;
  var readFile = new XMLHttpRequest();
  if (username.value == "Mahdi" && password.value == "1234") {
    location.replace("profile.html");
    count+=1;         
  }     
  if(count == 0){
    alert("incorrect username/password");
  }     
   if(count!=0){
  var blob1 = new Blob([username.value],{type: "text/plain;charset=utf-8"});
   saveAs(blob1, "currentUser.txt");
  }
  count=0;
}
loginBtn.addEventListener("click",check);

