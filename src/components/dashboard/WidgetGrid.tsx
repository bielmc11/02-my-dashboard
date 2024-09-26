import React from 'react'
import { SimpleWidget } from '../index'
import { IoCalculator } from 'react-icons/io5'

export const WidgetGrid = () => {
  return (
    <div className='flex flex-wrap items-center justify-center'>
        <SimpleWidget title='contador' subTitle='contador' label='Contador' href='/dashboard/count' icon={<IoCalculator size={40}/>}/>
    </div>
  )
}
