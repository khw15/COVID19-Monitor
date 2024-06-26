import React from 'react'
import { HorizontalBar, Line } from 'react-chartjs-2'
import Fade from 'react-reveal/Fade'

const TombolGrafik = (props) => {
  return (
    <Fade delay={100}>
      <button
        className="btn-apply mx-auto my-6 bg-blue-500 py-2 text-sm text-white px-6 rounded shadow"
        onClick={props.clickFn}
      >
        {props.chartVisible ? 'Sembunyikan' : 'Tampilkan'} Bagan
      </button>
      <div
        className={
          props.chartVisible
            ? 'flex flex-col md:flex-row flex-wrap justify-center items-center mx-auto bg-white py-10'
            : 'hidden'
        }
      >
        <div className="chart w-full md:w-1/2 lg:w-2/5 p-2">
          <HorizontalBar
            data={{
              labels: [...props.barLabel],
              datasets: [
                {
                  label: 'Total',
                  backgroundColor: [...props.barDataColor],
                  borderWidth: 1,
                  hoverBorderColor: '#000',
                  data: [...props.barDataValue],
                },
              ],
            }}
            legend={{
              display: true,
            }}
          ></HorizontalBar>
        </div>
        <div className="chart w-full md:w-1/2 lg:w-2/5 p-2">
          <Line
            legend={{ display: true }}
            data={{
              labels: props.lineCasesLabel,
              datasets: [
                {
                  label: 'Positif',
                  backgroundColor: 'rgba(51, 51, 51, 0.2)',
                  borderColor: '#333',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(51, 51, 51, 0.4)',
                  hoverBorderColor: '#333',
                  data: props.lineCasesValue,
                },
              ],
            }}
          ></Line>
        </div>
        <div className="chart w-full md:w-1/2 lg:w-2/5 p-2">
          <Line
            legend={{ display: true }}
            data={{
              labels: props.lineRecoveredLabel,
              datasets: [
                {
                  label: 'Sembuh',
                  backgroundColor: 'rgba(47, 133, 90, 0.2)',
                  borderColor: '#2f855a',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(47, 133, 90, 0.4)',
                  hoverBorderColor: '#2f855a',
                  data: props.lineRecoveredValue,
                },
              ],
            }}
          ></Line>
        </div>
        <div className="chart w-full md:w-1/2 lg:w-2/5 p-2">
          <Line
            legend={{ display: true }}
            data={{
              labels: props.lineDeathsLabel,
              datasets: [
                {
                  label: 'Meninggal Dunia',
                  backgroundColor: 'rgba(229, 62, 62, 0.2)',
                  borderColor: '#e53e3e',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(229, 62, 62, 0.4)',
                  hoverBorderColor: '#e53e3e',
                  data: props.lineDeathsValue,
                },
              ],
            }}
          ></Line>
        </div>
      </div>
    </Fade>
  )
}

export default TombolGrafik
