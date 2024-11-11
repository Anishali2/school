'use client'
import { useCurrency } from '@/src/hooks/use-currency'
import { Crosshair, HandCoins, Wallet } from 'lucide-react'
import React from 'react'

export const EstimatedIncomeExpenseThisMonth = () => {
  const { currency } = useCurrency()
  return (
    <div className="rounded-2xl border h-full border-input p-4 flex flex-col shadow">
      <div className="flex-1">
        <p className="font-medium text-base">Estimated Fee This Month</p>
        <div className="flex items-center justify-center gap-2 mt-5">
          <Crosshair className="h-5 w-5 text-red-500" />
          <p className="text-red-500 text-sm font-medium">Estimation</p>
        </div>
        <p className="font-bold text-2xl text-red-500 text-center mt-5">
          {currency} 0
        </p>
      </div>
      <div className="flex divide-x-2">
        <div className="flex items-center flex-col gap-2.5 flex-1">
          <p className="font-medium text-base">{currency} 0</p>
          <div className="text-green-500 flex gap-2 justify-center items-center">
            <Wallet className="h-4 w-4" />
            <p className="text-xs">Collection</p>
          </div>
        </div>
        <div className="flex items-center flex-col gap-2.5 flex-1">
          <p className="font-medium text-base">{currency} 0</p>
          <div className="text-red-500 flex gap-2 justify-center items-center">
            <HandCoins className="h-4 w-4" />
            <p className="text-xs">Remainings</p>
          </div>
        </div>
      </div>
    </div>
  )
}
