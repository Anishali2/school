'use client'

const data = {
  series: [
    {
      name: 'Income',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
    {
      name: 'Expense',
      data: [23, 32, 27, 41, 30, 54, 66, 91, 148]
    }
  ],
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Income-Expense Statistics',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep'
      ]
    }
  }
}

import React from 'react'
import ApexChart from 'react-apexcharts'
export const ExpenseIncomeChart = () => {
  return (
    <ApexChart
      options={data.options as any}
      series={data.series}
      type="line"
      height={350}
    />
  )
}
