const pos = document.querySelector('#position');
const com = document.querySelector('#company');
const dateApp = document.querySelector("#dateApplied");
const applied = document.querySelector("#howApplied");
const heard1 = document.querySelector("#heard");
const salaryRange = document.querySelector("#salary");
const trackerBtn = document.querySelector("#trackerButton")

function check(){
  var count = 0;
  var all = new Array();
    //reads the txt file & displays
    var readFile = new XMLHttpRequest();
    readFile.open("GET", "applicationInfo.txt", false);
    readFile.onreadystatechange = function (){
        if(readFile.readyState === 4){
            if(readFile.status === 200 || readFile.status == 0){
                var text = readFile.responseText;
                var values = text.split("\n");
            }
        }
    }
    count=0;
    readFile.send(null);
}

        function saveStaticDataToFile() {
            var blob = new Blob([pos.value+"\n"+com.value+"\n"+dateApp.value+"\n"+applied.value+"\n"+String(salaryRange.value)],{ type: "text/plain;charset=utf-8" });
            location.replace("tracker-page.html");
            saveAs(blob, "applicationInfo.txt");
            
        }
        

trackerBtn.addEventListener("click",check);
trackerBtn.addEventListener("click",saveStaticDataToFile);
