import * as React from 'react'
import { HorizontalBar as ChartHorizontalBar } from 'react-chartjs-2'

const HorizontalBar = (props: any) => (
  <ChartHorizontalBar
    options={{
      legend: { display: false },
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    }}
    {...props}
  />
)

export default HorizontalBar
