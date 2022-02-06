function converthttpsindex(){
    if(location.protocol == "http:"){
        location.replace("https://arduinoexchange.xyz");
    }
}
function converthttpsabout(){
    if(location.protocol == "http:"){
        location.replace("https://arduinoexchange.xyz/about.html");
    }
}
function converthttpsapi(){
    if(location.protocol == "http:"){
        location.replace("https://arduinoexchange.xyz/api.html");
    }
}
function converthttpsdonate(){
    if(location.protocol == "http:"){
        location.replace("https://arduinoexchange.xyz/donate.html");
    }
}
//script to copy addresses to clipboard
function clipboard() {
    var copyText = document.getElementById("clipboard");
    copyText.select();
    copyText.setSelectionRange(0, 10); 
    navigator.clipboard.writeText(copyText.value);
  }
