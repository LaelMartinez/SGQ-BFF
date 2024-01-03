function updateFile(newSrc) {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  const clickedLink = event.currentTarget;
  clickedLink.classList.add("active");

  var pdfViewer = document.getElementById("pdfViewer");

  pdfViewer.src = newSrc;
}

function upDateItem() {
  const navLinks = document.querySelectorAll(".nav-item");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  const clickedLink = event.currentTarget;
  clickedLink.classList.add("active");
}

function openPopup(e) {
  document.getElementById("popup").style.display = "block";

  if (e == "PO") {
    document.getElementById("formPO").style.display = "block";
    document.getElementById("formArquivo").style.display = "none";
  } else {
    document.getElementById("formPO").style.display = "none";
    document.getElementById("formArquivo").style.display = "block";
  }
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}