import React from 'react'
import s from './chart.module.css'
import Chart from './Chart'
import { useQuery } from 'react-query';
import axios from 'axios'
import Spinner from '../../components/Spinner';


export default function ChartModule() {

    const { data: chartData, isLoading, error } = useQuery('chartData', async () => {
        const response = await axios.get('http://localhost:3001/api/chart');
        return response.data;
    });


    if (isLoading) return (
        <div className='flex justify-center pt-10'>
            <Spinner/>
        </div>
    );
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className={s.chart_module_cont}>
            <h1 className='text-2xl font-bold pb-8 pl-8'>Actual vs Forecast at Lead Time (item: 8808765)</h1>
            <Chart data={chartData} />
        </div>
    )
}
