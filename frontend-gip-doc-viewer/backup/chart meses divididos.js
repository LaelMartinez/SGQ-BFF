var barChartData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
        label: 'Vendas Mensais',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [50, 60, 45, 70, 80]
    }]
};

var doughnutChartData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
        label: 'Vendas Mensais',
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1,
        data: [50, 60, 45, 70, 80]
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

function alterarMeses() {
    // Suponha que você tenha uma nova lista de meses
    var novosMeses = ['Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'];

    // Atualiza os dados dos gráficos
    barChart.data.labels = novosMeses;
    doughnutChart.data.labels = novosMeses;

    // Atualiza os dados da tabela (apenas como exemplo)
    var tabela = document.querySelector('table tbody');
    tabela.innerHTML = '';
    for (var i = 0; i < novosMeses.length; i++) {
        var novaLinha = '<tr><td>' + novosMeses[i] + '</td><td>' + (Math.floor(Math.random() * 100) + 1) + '</td></tr>';
        tabela.innerHTML += novaLinha;
    }

    // Atualiza os gráficos
    barChart.update();
    doughnutChart.update();
}
