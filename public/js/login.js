function httpGet(theUrl) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", theUrl, false); 
    xmlHttpReq.send();
    return xmlHttpReq.responseText;
}

async function httpPost (theUrl,data,callback) {
    let xmlHttpReq = new XMLHttpRequest();
    
    xmlHttpReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this);
        }
        
     };
    xmlHttpReq.open("POST", theUrl, true);
    xmlHttpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttpReq.send(data);
}




function submitForm() {
    oForm = document.forms[0];
    var email = oForm.elements["email"].value;
    var password = oForm.elements["password"].value;;
    
    var data = "email="+email+"&password="+password
    console.log(data)
    console.log("data")
    httpPost('http://localhost:3000/auth/login', data,(res)=>{
    console.log(res.responseText);
    });
}



