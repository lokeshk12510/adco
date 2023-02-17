import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

export const options = {
    responsive: true,
    aspectRatio: 2.3 / 0.7,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
}

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Dataset 1',
            data: [
                100, 123, 314, 615, 214, 1134, 314, 714, 765, 546, 234, 234, 674, 12, 123, 123, 12, 31, 23, 123, 131,
                23, 1, 31, 23, 12, 31, 23, 1, 3, 123, 1, 31, 23, 1, 23, 12, 31, 23, 1, 23, 1, 23, 123, 1, 3, 12, 31, 23,
                1, 2, 31, 23, 12, 3, 123, 1, 3,
            ],
            borderColor: '#82B34E',
            backgroundColor: '#82B34E33',
            tension: 0.3,
            xAxes: [
                {
                    type: 'time',
                    position: 'bottom',
                    time: {
                        displayFormats: { day: 'MM/YY' },
                        tooltipFormat: 'DD/MM/YY',
                        unit: 'month',
                    },
                },
            ],
        },
    ],
}

export function LineChart() {
    return <Line options={options} data={data} />
}
