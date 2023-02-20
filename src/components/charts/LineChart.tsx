import {
    CategoryScale,
    ChartData,
    Chart as ChartJS,
    Filler,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Colors,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, Colors)

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
        colors: {
            enabled: true,
            // forceOverride: true,
        },
    },
}

type LineProps = {
    data: ChartData<'line', number[], unknown>
}

export function LineChart({ data }: LineProps) {
    return <Line options={options} data={data} />
}
