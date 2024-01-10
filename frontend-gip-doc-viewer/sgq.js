function onload(){
  disableChart();

} 



function disableChart(){

  document.getElementById("chart").style.display = (document.getElementById("chart").style.display === "none") ? "block" : "none";

  document.getElementById("chart1").style.display = (document.getElementById("chart1").style.display === "none") ? "block" : "none";
  document.getElementById("chart2").style.display = (document.getElementById("chart2").style.display === "none") ? "block" : "none";

  document.getElementById("pdfViewer").style.display = "block";
  document.getElementById("pdfViewer2").style.display = "none";

}

function updateFile(newSrc) {
  disableChart();
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
  disableChart();

  const navLinks = document.querySelectorAll(".nav-item");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  const clickedLink = event.currentTarget;
  clickedLink.classList.add("active");
}

function openPopup(e,c,t) {
  document.getElementById("pdfViewer2").style.display = "none";


  if (e == "PO") {
    document.getElementById("popup").style.display = "block";
    document.getElementById("formPO").style.display = "block";
    document.getElementById("formArquivo").style.display = "none";
    document.getElementById("formAL").style.display = "none";
    document.getElementById("chart").style.display = "none";
    document.getElementById("chart1").style.display = "none";
    document.getElementById("chart2").style.display = "none";  
    document.getElementById("pdfViewer").style.display = "block";
    
} else {
    if (e == "AL") {
      document.getElementById("popup").style.display = "block";
      document.getElementById("formPO").style.display = "none";
      document.getElementById("formArquivo").style.display = "none";
      document.getElementById("formAL").style.display = "block";
      document.getElementById("chart").style.display = "none";
      document.getElementById("chart1").style.display = "none";
      document.getElementById("chart2").style.display = "none";
      document.getElementById("pdfViewer").style.display = "block";
    } else {
      if (e == "CH") {
        CarregaIndicador(c,t);

        document.getElementById("formPO").style.display = "none";
        document.getElementById("formArquivo").style.display = "none";
        document.getElementById("formAL").style.display = "none";
        document.getElementById("chart").style.display = "block";
        document.getElementById("chart1").style.display = "block";
        document.getElementById("chart2").style.display = "block";
        document.getElementById("pdfViewer").style.display = "none";
        document.getElementById("pdfViewer2").style.display = "block";
        chart
      } else {
        document.getElementById("popup").style.display = "block";
        document.getElementById("formPO").style.display = "none";
        document.getElementById("formArquivo").style.display = "block";
        document.getElementById("formAL").style.display = "none";
        document.getElementById("chart").style.display = "none";
        document.getElementById("chart1").style.display = "none";
        document.getElementById("chart2").style.display = "none";
        document.getElementById("pdfViewer").style.display = "block";
  
      }

    }
  }
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function GerarVersao() {
  var url = "http://localhost:80/cgi-bin/sgq.exe?opcao='newVersion'"
  
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById("resposta").innerHTML = data;
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
}

function AddFile(typeInput, fileName, fileExtension) {
  var url = "http://localhost:80/cgi-bin/sgq.exe?opcao='newFile'"+
            "&tipo=" + typeInput + 
            "&nome=" + fileName + 
            "&ext=" + fileExtension 
            ;
  
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById("resposta").innerHTML = data;
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
}