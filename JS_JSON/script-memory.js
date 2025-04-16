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


  //