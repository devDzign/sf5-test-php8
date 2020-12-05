import React from 'react';
import { Doughnut, Pie } from "react-chartjs-2";

const DougnutChart = ({title, data}) => {
    return (
        <div className="card p-2">
            <div className="card-title text-center">
                <h1 className="text-uppercase">{title}</h1>
            </div>
            <Doughnut data={data}/>
        </div>
    );
}

export default DougnutChart;
