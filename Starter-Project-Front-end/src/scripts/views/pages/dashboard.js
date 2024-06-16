import KalimantanSource from "../../data/kalimantanAPI";
import dashboardInit from "../../utils/dashboard/initiator/dashboardInit";
import registrasiAdminInit from "../../utils/registrasiPage/initiator/registrasiAdminInit";

const Dashboard = {
    async renderAdmin() {
        return `
            <custom-navbar></custom-navbar> 
            <custom-sidebar></custom-sidebar>  
            <div class="content">
                <div class="card-list">
                <div class="card-admin">
                    <p>Pengunjung</p>
                    <h4 class="jumlah-user">0</h4>
                    <i class="fa-solid fa-users icon"></i>
                </div>
                <div class="card-admin">
                    <p>Tiket terjual</p>
                    <h4 class="jumlah-tiket">0</h4>
                    <i class="fa-solid fa-ticket-simple icon"></i>
                </div>
                <div class="card-admin">
                    <p>Pendapatan</p>
                    <h5>Rp. <span class="price">0</span></h5>
                    <i class="fa-solid fa-hand-holding-dollar icon"></i>
                </div>
                </div>
                <div class="diagram">
                <h2>Diagram Penjualan</h2>
                
                <div class="card-diagram">
                    <div class="form-filter">
                    <select id="yearSelect" class="form-control"></select>
                    </div>
                <div class="chart-container">
                    <div class="chart-item">
                    <canvas id="monthlyIncomeChart"></canvas>
                    </div>
                    <div class="chart-item">
                    <canvas id="yearlyIncomeChart"></canvas>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <custom-footer></custom-footer>
        `
    },

    async afterRenderAdmin() {
      const tokenAdmin = localStorage.getItem('tokenAdmin')

      if(tokenAdmin === null) {
        Swal.fire({
          icon: 'info',
          title: 'Info!',
          text: `Anda Tidak bisa mnegakses ini, silahkan login sebagai admin !`,
        });
        return
      }

      const logoutAdmin = document.querySelector('.logout-admin')

      if (logoutAdmin === null) {
          return
      } else {
          logoutAdmin.addEventListener('click', (event) => {
              event.stopPropagation()
              KalimantanSource.logoutAdmin()
          })
      }

      const jumlahPengunjung = document.querySelector('.jumlah-user')
      const dataUser = await KalimantanSource.getActivityUser()

      jumlahPengunjung.innerHTML = dataUser.result.length

      const jumlahTiket = document.querySelector('.jumlah-tiket')
      const dataTotalTiket = await KalimantanSource.getTotalTiket()

      jumlahTiket.innerHTML = dataTotalTiket.tiket

      const jumlahPay = document.querySelector('.price')
      const dataTotalPay = await KalimantanSource.getTotalPay()

      jumlahPay.innerHTML = dataTotalPay.total


        $(document).ready(function() {
    $.getJSON("..//public/dataTestDiagramAdmin.json", function(data) {
      let years = Object.keys(data.pendapatan_tahunan);
      let totalIncome = [];
      let monthlyIncomeChart;
      let yearlyIncomeChart;
  
      years.forEach(function(year) {
        let total = data.pendapatan_tahunan[year].total;
        totalIncome.push(total);
      });
  
      // Initialize year select options
      let yearSelect = $('#yearSelect');
      years.forEach(function(year) {
        yearSelect.append(new Option(year, year));
      });
  
      function updateMonthlyChart(year) {
        let months = Object.keys(data.pendapatan_tahunan[year].detail);
        let monthlyIncome = Object.values(data.pendapatan_tahunan[year].detail);
  
        let ctx = document.getElementById('monthlyIncomeChart').getContext('2d');
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
        let selectedYear = $(this).val();
        updateMonthlyChart(selectedYear);
      });
  
      // Yearly income chart
      let ctx = document.getElementById('yearlyIncomeChart').getContext('2d');
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
    }
}

export default Dashboard