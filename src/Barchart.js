import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Biryani',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
        label: 'Nihari',
        backgroundColor: 'rgba(25,85,80,0.2)',
        borderColor: 'rgba(25,85,80,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'lightblue',
        hoverBorderColor: 'blue',
        data: [45, 25, 120, 10, 75, 60, 40]
      }
  ]
};

function Barchart(){
    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={150}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
        }
        export default Barchart;