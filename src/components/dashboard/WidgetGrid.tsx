'use client'
import React from 'react'
import { SimpleWidget } from '../index'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/hooks/useStore'

export const WidgetGrid = () => {
  const value = useAppSelector(state => state.counter.value)
  return (
    <div className='flex flex-wrap items-center justify-center'>
        <SimpleWidget title={`${value}`} subTitle='Productos AGREGADOS' label='Contador' href='/dashboard/count' icon={<IoCartOutline size={40} className='text-blue-700' />}/>
    </div>
  )
}
