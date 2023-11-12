import { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export default function TailwindChart() {
  useEffect(() => {
    // Define the options for the chart
    const options = {
        chart: {
                        width: "150",
                        height: "100",
                        // maxWidth: "20%",
                        type: "area",
                        fontFamily: "Inter, sans-serif",
                        dropShadow: {
                          enabled: false,
                        },
                        toolbar: {
                          show: false,
                        },
                      },
                      tooltip: {
                        enabled: true,
                        x: {
                          show: false,
                        },
                      },
                      fill: {
                        type: "gradient",
                        gradient: {
                          opacityFrom: 0.55,
                          opacityTo: 0,
                          shade: "#1C64F2",
                          gradientToColors: ["#1C64F2"],
                        },
                      },
                      dataLabels: {
                        enabled: false,
                      },
                      stroke: {
                        width: 2,
                        curve: 'smooth',
                      },
                      grid: {
                        show: false,
                        strokeDashArray: 4,
                        padding: {
                          left: 2,
                          right: 2,
                          top: -30,
                        },
                      },
                      series: [
                        {
                          name: "New users",
                          data: [6356, 6490, 6600, 6300, 6450, 6826, 6826],
                          color: "#12B76A",
                        },
                      ],
                      xaxis: {
                        categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
                        labels: {
                          show: false,
                        },
                        axisBorder: {
                          show: false,
                        },
                        axisTicks: {
                          show: false,
                        },
                      },
                      yaxis: {
                        show: false,
                      },
                  // ... (your existing options)
    };

    // Create and render the chart
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Clean up the chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div id='chart' className='chart'></div>
  );
}
