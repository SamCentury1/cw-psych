import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Pie} from 'react-chartjs-2';
import "./PieChart.css"

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);


const PieChart = ({stateData,remaining,chartOptions}) => {



    const getLabelsArray = (stateData) => {
        let arr = ['']
        stateData.forEach(element => {
            arr.push(`${element.value}% - ${element.body}`)
        });
        return arr
    }

    const getDataArray = (stateData) => {
        let arr = [remaining]
        stateData.forEach(element => {
            arr.push(element.value)
        });
        return arr
    }

    const getColorArray = (stateData) => {
        let arr = ['#FFFFFF']
        stateData.forEach(element => {
            arr.push(element.color)
        });
        return arr
    }


    const data = {
        labels: getLabelsArray(stateData),
        datasets:[
            {
                data: getDataArray(stateData),
                backgroundColor:getColorArray(stateData)
            }
        ]
    }

    // const options = {
    //     maintainAspectRatio: true,
    //     aspectRatio: 2,
    //     plugins: {
    //         legend: {
    //             position:legendPosition,
    //         },
    //     }
    // }


    return (
        <div className='chart-container'>
            <Pie data={data} options={chartOptions}  ></Pie>
        </div>
    )
}

export default PieChart