import React from 'react'
import s from './nav.module.css'
import arrow from '../../assets/arrow.svg'

export default function NavModule() {
  return (
    <div className={s.nav_cont}>
        <ul className={s.list_cont}>
            <li className='uppercase font-bold  cursor-pointer text-gray-500'>Items</li>
            <li className='-mx-7'><img src={arrow} alt=">" className='w-4 h-auto cursor-pointer -rotate-90' /></li>
            <li className=' font-bold  cursor-pointer text-gray-500'>8808765</li>
            <li className=' cursor-pointer  font-bold'>Demand Forecasting</li>
            <li className=' cursor-pointer font-semibold text-gray-500'>Supply Chain</li>
        </ul>
    </div>
  )
}
