
import ApexCharts from 'apexcharts';

const charts = () => {

  const windowData = document.querySelector('.window__data');
  const windowChart = document.querySelector('.window__chart');

  const form = document.querySelector('.data__form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    windowData.style.display = 'none';
    windowChart.style.display = 'block';

    const dateChart = document.getElementById('dateChart');
    const currentDate = document.getElementById('date').value;

    const renderDate = currentDate[8] + currentDate[9] + '.' + currentDate[5] + currentDate[6] + '.' + currentDate[0] + currentDate[1] + currentDate[2] + currentDate[3];

    dateChart.innerHTML = renderDate;

    const time = document.querySelectorAll('#time');
    const timeArr = [];

    for (let i = 0; i < time.length; i++) {
      timeArr.push(time[i].value);
    }

    const nameComp1 = form.querySelector('label[for="component1"]').textContent;
    const nameComp2 = form.querySelector('label[for="component2"]').textContent;
    const nameComp3 = form.querySelector('label[for="component3"]').textContent;
    const nameComp4 = form.querySelector('label[for="component4"]').textContent;

    const component1 = document.querySelectorAll('.component1');
    const component2 = document.querySelectorAll('.component2');
    const component3 = document.querySelectorAll('.component3');
    const component4 = document.querySelectorAll('.component4');

    const arrComponent1 = [];
    const arrComponent2 = [];
    const arrComponent3 = [];
    const arrComponent4 = [];

    for (let i = 0; i < timeArr.length; i++) {
      arrComponent1.push(component1[i].value);
      arrComponent2.push(component2[i].value);
      arrComponent3.push(component3[i].value);
      arrComponent4.push(component4[i].value);
    }

    const options = {
      series: [{
        name: nameComp1,
        data: arrComponent1
      }, {
        name: nameComp2,
        data: arrComponent2
      }, {
        name: nameComp3,
        data: arrComponent3
      }, {
        name: nameComp4,
        data: arrComponent4
      }],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10
        },
      },
      xaxis: {
        type: 'text',
        categories: timeArr,
      },
      legend: {
        position: 'bottom',
        offsetY: 0
      },
      fill: {
        opacity: 1
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

  });



};

export default charts;