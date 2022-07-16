
//Guarda una cookie con nombre y valor, se ponen los dias de expiracion
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


//Sube los datos al formulario con axios mediante una reques HTTP Post
function submitForm() {
  //Saca los datos del formulario
  oForm = document.forms[0];
  var email = oForm.elements["email"].value;
  var password = oForm.elements["password"].value;

//Reques post
  axios.post("/auth/login",
        {
            email: email,
            password: password
        }, 
        {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    .then(function (res) {
      //Guarda la cookie de autorizacion generada por service.js
        setCookie("Authorization",`Bearer ${res.data["token"]}`,15)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
