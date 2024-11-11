import { cn } from '@/src/lib/utils'
import React from 'react'
interface Props {
  className?: string
  title: string
  icon: any
  subTitle: string
  value: number
  subValue: string
}
export const StatisticsCard = ({
  icon: Icon,
  subTitle,
  subValue,
  title,
  value,
  className
}: Props) => {
  return (
    <div
      role="button"
      className={cn(
        'px-4 py-4 rounded-2xl space-y-5 hover:shadow-2xl transition-all duration-300',
        className
      )}
    >
      <p className="text-white font-medium">{title}</p>
      <div className="flex items-center justify-between">
        <Icon className="h-10 w-10 text-white" />
        <p className="text-4xl text-white font-bold">{value}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-white text-sm">{subTitle}</p>
        <p className="text-white text-sm">{subValue}</p>
      </div>
    </div>
  )
}
