// HighChart

const tds = Array.from(document.querySelectorAll('td[data-col]'));


for (let i = 0; i < tds.length; i += 1) {
    let barD = (tds[i].dataset.col).split(';');
    let barSec = false;
    if (barD[1] != null) {
        barSec = true;
    }
    let barData = barD[0].split(',');
    let targetBar = [Number(barData[0])];
    let valueBar = [Number(barData[1])];

    createChart(tds[i], targetBar, valueBar, barSec);
}

function createChart(elem, targetBar, valueBar, barSec) {
    let max = '';
    if (barSec) {
        max = 1000
    } else {
        max = 100
    }

    $(elem).highcharts({
        chart: {
            type: 'bar',
            backgroundColor: null,
            height: 18,
            margin: [0, 0, 0, 0],
            borderWidth: 0,
            style: {
                overflow: 'visible'
            },
            skipClone: true,
        },
        colors: ['#096aa0', '#3dbcf1'],
        series: [{
            name: 'Target',
            data: targetBar,
            pointPadding: 0.3,
            pointPlacement: -0.2,
            pointWidth: 18
        }, {
            name: 'Value',
            data: valueBar,
            pointPadding: 0.4,
            pointPlacement: -0.2,
            pointWidth: 8,
            dataLabels: {
                enabled: false,
            }
        }],
        title: false,
        xAxis: {
            visible: false
        },
        yAxis: {
            min: 0,
            max: max,
            visible: false
        },
        plotOptions: {
            bar: {
                grouping: false,
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    style: {
                        color: '#0c3b55',
                        textOutline: 'transparent',
                        fontSize: '14px',
                        fontWeight: '500',
                        fontFamily: 'Oswald'
                    },
                    y: -5,
                    formatter: function() {
                        if (barSec) {
                            return this.y + ' SEC';
                        } else {
                            return this.y + '%';

                        }
                    }
                },
            },
            series: {
                borderWidth: 0,
                animation: false,
                states: {
                    inactive: {
                        opacity: 1
                    }
                }
            }
        },
        tooltip: {
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#0c3b55',
            shadow: false,
            outside: true,
            formatter: function() {
                return this.y + '%';
            },
            style: {
                color: '#3dbcf1',
                textOutline: 'transparent',
                fontSize: '8px',
                fontWeight: '500',
                lineHeight: '1',
                fontFamily: 'Oswald'
            },
            hideDelay: 0,
            padding: 4,
        },
        legend: false,
        credits: false
    });
}