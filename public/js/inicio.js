1

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function sendToPersonal() {
  //Consigue la cookie de autorizacion y hace una request a una ruta con autenticacion
    axios.get("/personal",
        { 
            headers: {"Authorization" : `${getCookie("Authorization")}`} 
        })
        .then(function (res) {
            document.write(res.data);
            window.history.pushState("", "", '/personal');
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        });
  }
  