

// var readFile = new XMLHttpRequest();
// readFile.open("GET", "currentUser.txt", false);
// readFile.onreadystatechange=getCurrentUser(); 
// function getCurrentUser(){
//   var currentUser = "";
//   if(readFile.readyState === 4){
//     if(readFile.status === 200 || readFile.status == 0){
//       currentUser = readFile.responseText;                 
//     }
//   }
//   return currentUser;
// }
// readFile.send(null);


// var readProfileFile = new XMLHttpRequest();
// readProfileFile.open("GET", "profile.txt", false);
// readProfileFile.onreadystatechange  = readProfileFileFunction();
// function readProfileFileFunction(){
//   var send = "";
//   if(readProfileFile.readyState === 4){
//     if(readProfileFile.status === 200 || readProfileFile.status == 0){
//       var profileText = readProfileFile.responseText;
//       var profileValues = profileText.split("\n");
//       for(var i =0; i<profileValues.length-1;i=i+8){
//         if(getCurrentUser()==profileValues[i]){
//           send=profileValues[i]+"\n"+profileValues[i+1]+"\n"+profileValues[i+2]+"\n"+profileValues[i+3]+"\n"+profileValues[i+4]+"\n"+profileValues[i+5]+"\n"+profileValues[i+6]+"\n"+profileValues[i+7];
//         }
//       }
               
//     }
//   }
//  return send;
// } 
// readProfileFile.send(null);

// document.querySelector('#display').innerHTML=readProfileFileFunction();
   