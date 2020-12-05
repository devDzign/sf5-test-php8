import React from 'react';
import { Pie } from "react-chartjs-2";

const PieChart = ({title, data}) => {
    return (
        <div className="card p-2">
            <div className="card-title text-center">
                <h1 className="text-uppercase">{title}</h1>
            </div>
            <Pie data={data}/>
        </div>
    );
}

export default PieChart;
