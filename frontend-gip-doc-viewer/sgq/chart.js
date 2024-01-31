var barChartData = {
    labels: [],
    datasets: [{
        label: '',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: []
    }]
};

var doughnutChartData = {
    labels: [],
    datasets: [{
        label: '',
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1,
        data: []
    }]
};

var chartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var barCtx = document.getElementById('barChart').getContext('2d');
var doughnutCtx = document.getElementById('doughnutChart').getContext('2d');

var barChart = new Chart(barCtx, {
    type: 'bar',
    data: barChartData,
    options: chartOptions
});

var doughnutChart = new Chart(doughnutCtx, {
    type: 'doughnut',
    data: doughnutChartData,
    options: chartOptions
});


function CarregaIndicador (caminho, indicador) {
    
    window.myIndicador = indicador;

    fetch(`http://localhost:3000/api/indicador?caminho=${caminho}`)
      .then((response) => response.json())
      .then((data) => {
        const { primeiraLinha, segundaLinha, fileName } = data;
    
        window.myLabels = Object.values(primeiraLinha);
        window.myDados = Object.values(segundaLinha);

        console.log('Nome:', fileName);
        console.log('Labels:', myLabels);
        console.log('Dados:', myDados);

        Ano();
    })
      .catch((error) => console.error('Erro:', error));

};


function gerarTabela(labels, dados, indicador) {
    const tabelaContainer = document.getElementById('tabela-container');

    // Criar tabela
    const tabela = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Cabeçalho da tabela
    const cabecalho = document.createElement('tr');
    const thMes = document.createElement('th');
    thMes.textContent = 'Mês';
    const thIndicador = document.createElement('th');
    thIndicador.textContent = indicador;

    cabecalho.appendChild(thMes);
    cabecalho.appendChild(thIndicador);
    thead.appendChild(cabecalho);
    tabela.appendChild(thead);

    // Linhas da tabela
    for (let i = 0; i < labels.length; i++) {
      const tr = document.createElement('tr');
      const tdMes = document.createElement('td');
      tdMes.textContent = labels[i];
      const tdDado = document.createElement('td');
      tdDado.textContent = dados[i];

      tr.appendChild(tdMes);
      tr.appendChild(tdDado);
      tbody.appendChild(tr);
    }

    tabela.appendChild(tbody);

    // Adicionar tabela ao contêiner
    tabelaContainer.appendChild(tabela);
  }


function Ano(){
    var novosMeses = myLabels;
    var novosDados = myDados;
    var fileName = myIndicador;

    barChart.data.labels = novosMeses;
    barChart.data.datasets[0].label = fileName; 
    barChart.data.datasets[0].data = novosDados;

    doughnutChart.data.labels = novosMeses;
    doughnutChart.data.datasets[0].label = fileName; 
    doughnutChart.data.datasets[0].data = novosDados;

    var tabela = document.querySelector('table');
    tabela.innerHTML = '';

    var novaLinha = '<thead><tr><th>' + 'Meses' + '</th><th>' + myIndicador + '</th></tr></thead><tbody></tbody>';

   
    tabela.innerHTML += novaLinha;


    for (var i = 0; i < novosMeses.length; i++) {
        var novaLinha = '<tr><td>' + novosMeses[i] + '</td><td>' + novosDados[i] + '</td></tr>';
        tabela.innerHTML += novaLinha;
    }

    barChart.update();
    doughnutChart.update();


}


function PrimeiroTrimestre() {
    var novosMeses = [myLabels[0], myLabels[1], myLabels[2]];
    var novosDados = [myDados[0], myDados[1], myDados[2]];

    barChart.data.labels = novosMeses;
    barChart.data.datasets[0].data = novosDados;

    doughnutChart.data.labels = novosMeses;
    doughnutChart.data.datasets[0].data = novosDados;

    var tabela = document.querySelector('table');
    tabela.innerHTML = '';

    var novaLinha = '<thead><tr><th>' + 'Meses' + '</th><th>' + myIndicador + '</th></tr></thead><tbody></tbody>';
    tabela.innerHTML += novaLinha;


    for (var i = 0; i < novosMeses.length; i++) {
        var novaLinha = '<tr><td>' + novosMeses[i] + '</td><td>' + novosDados[i] + '</td></tr>';
        tabela.innerHTML += novaLinha;
    }

    barChart.update();
    doughnutChart.update();
}


function SegundoTrimestre() {
    var novosMeses = [myLabels[3], myLabels[4], myLabels[5]];
    var novosDados = [myDados[3], myDados[4], myDados[5]];

    barChart.data.labels = novosMeses;
    barChart.data.datasets[0].data = novosDados;

    doughnutChart.data.labels = novosMeses;
    doughnutChart.data.datasets[0].data = novosDados;

    var tabela = document.querySelector('table');
    tabela.innerHTML = '';

    var novaLinha = '<thead><tr><th>' + 'Meses' + '</th><th>' + myIndicador + '</th></tr></thead><tbody></tbody>';
    tabela.innerHTML += novaLinha;

    for (var i = 0; i < novosMeses.length; i++) {
        var novaLinha = '<tr><td>' + novosMeses[i] + '</td><td>' + novosDados[i] + '</td></tr>';
        tabela.innerHTML += novaLinha;
    }

    barChart.update();
    doughnutChart.update();
}

function TerceiroTrimestre() {
    var novosMeses = [myLabels[6], myLabels[7], myLabels[8]];
    var novosDados = [myDados[6], myDados[7], myDados[8]];

    barChart.data.labels = novosMeses;
    barChart.data.datasets[0].data = novosDados;

    doughnutChart.data.labels = novosMeses;
    doughnutChart.data.datasets[0].data = novosDados;

    var tabela = document.querySelector('table');
    tabela.innerHTML = '';

    var novaLinha = '<thead><tr><th>' + 'Meses' + '</th><th>' + myIndicador + '</th></tr></thead><tbody></tbody>';
    tabela.innerHTML += novaLinha;

    for (var i = 0; i < novosMeses.length; i++) {
        var novaLinha = '<tr><td>' + novosMeses[i] + '</td><td>' + novosDados[i] + '</td></tr>';
        tabela.innerHTML += novaLinha;
    }

    barChart.update();
    doughnutChart.update();
}

function QuartoTrimestre() {
    var novosMeses = [myLabels[9], myLabels[10], myLabels[11]];
    var novosDados = [myDados[9], myDados[10], myDados[11]];

    barChart.data.labels = novosMeses;
    barChart.data.datasets[0].data = novosDados;

    doughnutChart.data.labels = novosMeses;
    doughnutChart.data.datasets[0].data = novosDados;

    var tabela = document.querySelector('table');
    tabela.innerHTML = '';

    var novaLinha = '<thead><tr><th>' + 'Meses' + '</th><th>' + myIndicador + '</th></tr></thead><tbody></tbody>';
    tabela.innerHTML += novaLinha;


    for (var i = 0; i < novosMeses.length; i++) {
        var novaLinha = '<tr><td>' + novosMeses[i] + '</td><td>' + novosDados[i] + '</td></tr>';
        tabela.innerHTML += novaLinha;
    }

    barChart.update();
    doughnutChart.update();
}


async function uploadFile(fileId, typeId) {


    const fileInput = document.getElementById(fileId);
    const typeInput = document.getElementById(typeId);
    const typeFile = typeInput.value;
    const file = fileInput.files[0];

    if (!file) {
      console.error('Selecione um arquivo para enviar.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
         const fileName = file.name;
         const fileExtension = fileName.split('.').pop(); 
         console.log('Arquivo enviado com sucesso!');

         AddFile(typeFile, fileName, fileExtension, window.caminhoTroca);


      } else {
        console.error('Falha ao enviar o arquivo.');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  }