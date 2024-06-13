
$(document).ready(function() {
  $.getJSON("../../../data/dataTestDiagramAdmin.json", function(data) {
    var years = Object.keys(data.pendapatan_tahunan);
    var totalIncome = [];
    var monthlyIncomeChart;
    var yearlyIncomeChart;

    years.forEach(function(year) {
      var total = data.pendapatan_tahunan[year].total;
      totalIncome.push(total);
    });

    // Initialize year select options
    var yearSelect = $('#yearSelect');
    years.forEach(function(year) {
      yearSelect.append(new Option(year, year));
    });

    function updateMonthlyChart(year) {
      var months = Object.keys(data.pendapatan_tahunan[year].detail);
      var monthlyIncome = Object.values(data.pendapatan_tahunan[year].detail);

      var ctx = document.getElementById('monthlyIncomeChart').getContext('2d');
      if (monthlyIncomeChart) monthlyIncomeChart.destroy();
      monthlyIncomeChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: months,
          datasets: [{
            label: 'Pendapatan Bulanan',
            data: monthlyIncome,
            backgroundColor: '#1d9f71',
            borderColor: '#1d9f71',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          legend: {
            display: false
          },
          title: {
            display: true,
            text: `Pendapatan Bulanan - ${year}`
          }
        }
      });
    }

    // Initial monthly chart for the first year
    updateMonthlyChart(years[0]);

    // Year select change event
    yearSelect.change(function() {
      var selectedYear = $(this).val();
      updateMonthlyChart(selectedYear);
    });

    // Yearly income chart
    var ctx = document.getElementById('yearlyIncomeChart').getContext('2d');
    yearlyIncomeChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: 'Pendapatan Tahunan',
          data: totalIncome,
          backgroundColor: '#1d9f71',
          borderColor: '#1d9f71',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Pendapatan Tahunan'
        }
      }
    });
  });
});

