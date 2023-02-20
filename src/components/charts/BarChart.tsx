import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    Colors,
    CoreChartOptions,
    ElementChartOptions,
    PluginChartOptions,
    DatasetChartOptions,
    ScaleChartOptions,
    BarControllerChartOptions,
} from 'chart.js'
import { _DeepPartialObject } from 'chart.js/dist/types/utils'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Colors)

type BarProps = {
    data: ChartData<'bar', number[], unknown>
    chartOptions?:
        | _DeepPartialObject<
              CoreChartOptions<'bar'> &
                  ElementChartOptions<'bar'> &
                  PluginChartOptions<'bar'> &
                  DatasetChartOptions<'bar'> &
                  ScaleChartOptions<'bar'> &
                  BarControllerChartOptions
          >
        | undefined
}

export function BarChart({ data, chartOptions }: BarProps) {
    return <Bar options={chartOptions} data={data} />
}
