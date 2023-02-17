import { ArcElement, ChartData, Chart as ChartJS, Colors, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, Colors)

type DoughnutProps = {
    data: ChartData<'doughnut', number[], unknown>
}

const options = {
    responsive: false,
    aspectRatio: 1,
    plugins: {
        legend: {
            position: 'right' as const,
        },
        colors: {
            enabled: true,
            // forceOverride: true,
        },
    },
}

const DoughnutChart = ({ data }: DoughnutProps) => {
    return <Doughnut data={data} options={options} />
}

export default DoughnutChart
