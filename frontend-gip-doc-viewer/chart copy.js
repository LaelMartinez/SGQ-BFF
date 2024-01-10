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

const caminho =  'U:/sgq/mq-00/po-00/it-00/fr-00/fri-00.csv';
const indicador = 'Vendas'; 

window.onload = (caminho, indicador) => {
    
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

    var tabela = document.querySelector('table tbody');
    tabela.innerHTML = '';
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

    var tabela = document.querySelector('table tbody');
    tabela.innerHTML = '';
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

    var tabela = document.querySelector('table tbody');
    tabela.innerHTML = '';
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

    var tabela = document.querySelector('table tbody');
    tabela.innerHTML = '';
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

    var tabela = document.querySelector('table tbody');
    tabela.innerHTML = '';
    for (var i = 0; i < novosMeses.length; i++) {
        var novaLinha = '<tr><td>' + novosMeses[i] + '</td><td>' + novosDados[i] + '</td></tr>';
        tabela.innerHTML += novaLinha;
    }

    barChart.update();
    doughnutChart.update();
}
