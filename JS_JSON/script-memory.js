function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '11px';
    }
  }
  

 //MODAL OVERLAY TEST//
  
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("modalOverlay");

  openModalBtn.addEventListener("click", (e) => {
    e.preventDefault(); // evita el salto de página si es un <a>
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });


  // PASSWOR VALIDATION

  function passwordVisibility() {

    //ajouter un evènement au click sur l'image
    document.getElementById('oeil').addEventListener('click', function () {
        //changer la source de l'image, le alt et le type de l'input
        const pwdInput = document.getElementById('mdp')

        if (pwdInput.type === "password") {
            pwdInput.type = "text";
            this.src = "images/eye-open.png"
            //this.setAttribute('src', 'images/eye-open.png');
            this.alt = "Icône oeil ouvert"
        } else {
            pwdInput.type = "password";
            this.src = "images/eye-close.png"
            this.alt = "Icône oeil fermé"
        }
    })
}

function checkPassword() {
    //récupérer la valeur de l'input
    let pwd = document.getElementById('mdp').value

    let pwdLen = checkPwdLength(pwd)
    let pwdNum = checkPwdNumber(pwd)
    let pwdMin = checkPwdMinus(pwd)
    let pwdMax = checkPwdMaxus(pwd)

    if (pwdLen && pwdNum && pwdMin && pwdMax) {
        document.getElementById('valider').disabled = false
    } else {
        document.getElementById('valider').disabled = true
    }
}

function checkPwdNumber(pwd) {

    // /[0-9]+/ expression régulière qui vérifie si
    //le mdp contient un chiffre
    let isOk = /[0-9]+/.test(pwd)

    if (isOk) {
        colorTextGreen('chiffre')
    } else {
        colorTextRed('chiffre')
    }

    return isOk
}
function checkPwdLength(pwd) {

    let isOk = pwd.length >= 6
    //tester la longueur du mot
    if (isOk) {
        //modifier la couleur de la consigne concernée (vert ou rouge)
        colorTextGreen('nbCaracteres')
    } else {
        colorTextRed('nbCaracteres')
    }

    return isOk
}

function checkPwdSymbol(pwd) {
  // Verifica si hay al menos un símbolo (carácter no alfanumérico)
  let isOk = /[\W_]+/.test(pwd); // incluye símbolos como !@#$%, etc.

  if (isOk) {
    colorTextGreen('symbole');
  } else {
    colorTextRed('symbole');
  }

  return isOk;
}

function colorTextGreen(id) {
    document.getElementById(id).style.color = "chartreuse"
}

function colorTextRed(id) {
    document.getElementById(id).style.color = "red"
}


function init() {
    passwordVisibility()
    document.getElementById('mdp').addEventListener('input', checkPassword)
}

window.onload = init