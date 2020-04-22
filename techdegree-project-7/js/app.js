// Charts

var traffic = document.getElementById('traffic-chart');
var daily = document.getElementById('daily-chart');
var mobile = document.getElementById('mobile-chart');


var trafficChart = new Chart(traffic, {
    type: 'line',
    data: {
        xLabels: ['16-22', '23-29', '30-5', '6-12', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        yLabels: ['500', '1000', '1500', '2000', '2500'],
        responsive: true,
        maintainAspectRatio: false,
        datasets: [{
            data: [0,750, 1250, 1000, 1500, 2000, 1500, 1250, 1750, 2250, 1750, 2250],
            pointBackgroundColor: 'rgba(225, 225, 225, 1)',
            backgroundColor: [
                'rgba(115, 119, 191, .3)',
            ],
            borderColor: [
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)'
            ],
            lineTension: 0,
            borderWidth: 2
        }]
    },

   options: {
        legend: {
            display: false
        },
        layout: {
            padding: {
                left: 15
            }
        },
        
    scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 500,
                    suggestedMax: 2500,
                    fontFamily: 'Oswald',
                    fontSize: 10,
                    padding: 7
                },
                gridLines: {
                    drawTicks: false,
                }
            }],

            xAxes: [{
                ticks: {
                    fontFamily: 'Oswald',
                    fontSize: 10,
                    padding: 7,
                },
                gridLines:{
                    tickMarkLength: 20,
                    drawTicks: false,
                }
            }]
        }
    }
});

var dailyChart = new Chart(daily, {
    type: 'bar',
    data: {
        xLabels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        yLabels: ['50', '100', '150', '200', '250'],
        responsive: true,
        maintainAspectRatio: false,
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: 'rgba(115, 119, 191, 1)'
        }]
    },

    options: {
        legend: {
            display: false
        },
        layout: {
            padding: {
                left: 15
            }
        },

    scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 50,
                suggestedMax: 250,
                fontFamily: 'Oswald',
                fontSize: 10,
                padding: 7
            },
            gridLines: {
                drawTicks: false,
            }
        }],

        xAxes: [{
            ticks: {
                fontFamily: 'Oswald',
                fontSize: 10,
                padding: 7,
            },
            gridLines:{
                tickMarkLength: 20,
                drawTicks: false,
            }
        }]
    }
  }
});

var mobileChart = new Chart(mobile, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        responsive: true,
        maintainAspectRatio: false,
        datasets: [{
            data: [75, 25, 25],
            backgroundColor: ['rgba(115, 119, 191, 1)', 'rgba(129, 201, 143, 1)', 'rgba(116, 177, 191, 1)']
        }]
    },

    options: {
        legend: {
            position: 'right',
            labels: {
                fontFamily: 'Oswald',
            },
        },

        rotation: 0.1 * Math.PI

    }
});

// Alert Banner

const alertBanner = document.getElementById('alert');
const notifications = document.getElementById('notifications');

alertBanner.innerHTML = 
    `<div class="alert-banner">
        <p><strong>Alert</strong> Lorem ipsum dolor sit amet ad vocent inciderint nam</p>
        <p class="alert-banner-close">x</p>
        </div>`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.value.includes("alert-banner-close")) {
        alertBanner.style.display = 'none',
        notifications.style.display = 'none'
    }
});

// Message User

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if (user.value === "" && message.value === '') {
        alert ('Please fill out user and message fields');
    } else if (user.value === '') {
        alert ('Please fill out user field');
    } else if (message.value === '') {
        alert('Please fill out message field');
    } else {
        alert(`Message sent to: ${user.value}`)
    }
});







