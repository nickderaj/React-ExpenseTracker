import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((el) => el.value);
  const dataMax = Math.max(...dataPointValues);
  const dataSum = dataPointValues.reduce((a, b) => a + b);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // we assume the label is unique
          value={dataPoint.value}
          maxValue={dataMax}
          label={dataPoint.label}
          sum={dataSum}
        />
      ))}
    </div>
  );
};

export default Chart;
