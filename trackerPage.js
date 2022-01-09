var readProfileFile = new XMLHttpRequest();
readProfileFile.open("GET", "applicationInfo.txt", false);
readProfileFile.onreadystatechange  = readProfileFileFunction();
function readProfileFileFunction(){
  var send = "";
  if(readProfileFile.readyState === 4){
    if(readProfileFile.status === 200 || readProfileFile.status == 0){
      var profileText = readProfileFile.responseText;
      var profileValues = profileText.split("\n");
      for(var i =0; i<profileValues.length-1;i=i+4){
     
          send=profileValues[i]+"\n"+profileValues[i+1]+"\n"+profileValues[i+2]+"\n"+profileValues[i+3]+"\n"+profileValues[i+4];

        
      }
               
    }
  }
 return send;
} 
readProfileFile.send(null);

document.querySelector('#display').innerHTML=readProfileFileFunction();