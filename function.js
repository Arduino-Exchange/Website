function httptohttps(){
    if(location.protocol === "http:"){
        location.replace(`https://${location.hostname}${location.pathname}`);
    }
}

//script to copy addresses to clipboard
function clipboard() {
    var copyText = document.getElementById("clipboard");
    copyText.select();
    copyText.setSelectionRange(0, 10); 
    navigator.clipboard.writeText(copyText.value);
  }
