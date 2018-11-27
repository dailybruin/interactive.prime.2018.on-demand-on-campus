import * as React from 'react'
import { Doughnut as ChartDoughnut } from 'react-chartjs-2'

const Doughnut = (props: any) => (
  <ChartDoughnut
    options={{
      legend: {
        position: 'left',
      },
    }}
    {...props}
  />
)

export default Doughnut
