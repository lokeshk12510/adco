import { ArcElement, ChartData, Chart as ChartJS, Colors, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, Colors)

// Custom plugin to show the needle
const GaugeNeedle = {
    id: 'gaugeNeedle',
    afterDatasetDraw(chart: any) {
        const {
            ctx,
            data,
            chartArea: { width, height, left, right },
        } = chart
        ctx.save()

        // get values from datasets
        const { total, needleValue, completedValue } = data.datasets[0]

        // Find the angle
        let angle = Math.PI + (1 / total) * needleValue * Math.PI

        // Positions
        let cx = width / 2
        let cy = chart._metasets[0].data[0].y

        // Needle
        ctx.translate(cx, cy)
        ctx.rotate(angle)
        ctx.beginPath()
        ctx.moveTo(0, -10)
        ctx.lineTo(height - ctx.canvas.height / 2, 0)
        ctx.lineTo(0, 2)
        ctx.fillStyle = '#000'
        ctx.fill()
        ctx.restore()

        // Needle DOT
        ctx.beginPath()
        ctx.arc(cx, cy, chart._metasets[0].data[0].innerRadius, 0, 10)
        ctx.fillStyle = '#fff'
        ctx.fill()
        ctx.restore()

        // Value Text
        ctx.font = '24px Roboto'
        ctx.fillStyle = '#000'
        ctx.fillText(completedValue + '%', cx, cy)
        ctx.textAlign = 'center'
        ctx.restore()

        // Value Text
        ctx.font = '16px Roboto'
        ctx.fillStyle = '#000'
        ctx.fillText(0, left + 60, height)
        ctx.textAlign = 'center'
        ctx.restore()

        // Value Text
        ctx.font = '16px Roboto'
        ctx.fillStyle = '#000'
        ctx.fillText(total, right - 60, height)
        ctx.textAlign = 'center'
        ctx.restore()
    },
}

type GaugeProps = {
    data: ChartData<'doughnut', number[], unknown>
}

const options = {
    responsive: true,
    aspectRatio: 4 / 4,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            display: false,
        },
        colors: {
            enabled: true,
            // forceOverride: true,
        },
    },
}

const GaugeChart = ({ data }: GaugeProps) => {
    return <Doughnut data={data} options={options} plugins={[GaugeNeedle]} />
}

export default GaugeChart
