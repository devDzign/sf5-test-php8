import React from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";

const StatisticDashboard = ({data}) => {

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }

    const dataBarCompare = {
        labels: data.labels,
        datasets: [
            {
                ...data.datasets[0],
                label: 'green voter'
            },
            data.datasets[0]
        ],
    }

    const dataBarPile = {
        labels: data.labels,
        datasets: [
            {
                label: '# of Red Votes',
                ...data.datasets[0],
            },
            {
                label: '# of Blue Votes',
                ...data.datasets[0],
            },
            {
                label: '# of Green Votes',
                ...data.datasets[0],
            },
        ],
    }

    const optionsPile = {
        scales: {
            yAxes: [
                {
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
            xAxes: [
                {
                    stacked: true,
                },
            ],
        },
    }

    return (
        <>

            <div className="col-md-6 col-lg-4 my-5">
                <div className="card">
                    <div className="card-title text-center">
                        <h1 className="text-uppercase">Bar Chart</h1>
                    </div>
                    <Bar data={data} options={options}/>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 my-5">
                <div className="card">
                    <div className="card-title text-center">
                        <h1 className="text-uppercase">Bar Chart</h1>
                    </div>
                    <Pie data={data}/>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 my-5">
                <div className="card">
                    <div className="card-title text-center">
                        <h1 className="text-uppercase">Bar Chart</h1>
                    </div>
                    <Bar data={dataBarCompare} options={options}/>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 my-5">
                <div className="card">
                    <div className="card-title text-center">
                        <h1 className="text-uppercase">Bar Chart</h1>
                    </div>
                    <Bar data={dataBarPile} options={optionsPile}/>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 my-5">
                <div className="card">
                    <div className="card-title text-center">
                        <h1 className="text-uppercase">Bar Chart</h1>
                    </div>
                    <Line data={data} options={options}/>
                </div>
            </div>


            {/*<div className="col-2 border border-success ml-1 p-1">*/}
            {/*    <Bar data={data} options={options}/>*/}
            {/*</div>*/}
            {/*<div className="col-2  border border-success ml-1 p-1">*/}
            {/*    <Pie data={data}/>*/}
            {/*</div>*/}
            {/*<div className="col-2  border border-success ml-1 p-1">*/}
            {/*    <Bar data={dataBarCompare} options={options}/>*/}
            {/*</div>*/}
            {/*<div className="col-2 border border-success ml-1 p-1">*/}
            {/*    <Bar data={dataBarPile} options={optionsPile}/>*/}
            {/*</div>*/}
            {/*<div className="col-2 border border-success ml-1 p-1">*/}
            {/*    <Line data={data} options={options}/>*/}
            {/*</div>*/}


        </>
    );
};

export default StatisticDashboard;
