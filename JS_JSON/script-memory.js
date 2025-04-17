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

//   function passwordVisibility() {

//     //ajouter un evènement au click sur l'image
//     document.getElementById('oeil').addEventListener('click', function () {
//         //changer la source de l'image, le alt et le type de l'input
//         const pwdInput = document.getElementById('mdp')

//         if (pwdInput.type === "password") {
//             pwdInput.type = "text";
//             this.src = "images/eye-open.png"
//             //this.setAttribute('src', 'images/eye-open.png');
//             this.alt = "Icône oeil ouvert"
//         } else {
//             pwdInput.type = "password";
//             this.src = "images/eye-close.png"
//             this.alt = "Icône oeil fermé"
//         }
//     })
// }



// Check Mot de Passe
function checkPassword() {
  let pwd = document.getElementById('mdp').value;
  checkPwd(pwd); // Cambia el color
  checkForm();   // Verifica si todo está OK para activar el botón
}

function checkPwd(pwd) {
  const regex = /^(?=.*[0-9])(?=.*[\W_]).{6,}$/;
  const isOk = regex.test(pwd);

  if (isOk) {
    colorTextGreen('checkMdp');
  } else {
    colorTextRed('checkMdp');
  }

  return isOk;
}

// Check Nom
function checkNom() {
  let nom = document.getElementById('name').value;
  checkPwdLengthNom(nom); // Cambia el color
  checkForm();            // Verifica si todo está OK para activar el botón
}

function checkPwdLengthNom(nom) {
  let isOk = nom.length >= 3;

  if (isOk) {
    colorTextGreen('nbCaracteresName');
  } else {
    colorTextRed('nbCaracteresName');
  }

  return isOk;
}



// Check EMAIL




// Verifica el estado general del formulario
function checkForm() {
  const nom = document.getElementById('name').value;
  const pwd = document.getElementById('mdp').value;

  const nomOk = checkPwdLengthNom(nom);
  const pwdOk = checkPwd(pwd);

  document.getElementById('valider').disabled = !(nomOk && pwdOk);
}

// Colores
function colorTextGreen(id) {
  document.getElementById(id).style.color = "chartreuse";
}

function colorTextRed(id) {
  document.getElementById(id).style.color = "red";
}

// Inicialización
function init() {
  document.getElementById('name').addEventListener('input', checkNom);
  document.getElementById('mdp').addEventListener('input', checkPassword);
}

window.onload = init


//fermer overlay

function closeOverlay (){

document.getElementById('modalOverlay').style.display = "none";

document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('mdp').value = '';

}