'use client'
import React, { useMemo } from 'react'
import { TSidebarItem } from '../../types'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
interface Props {
  data: TSidebarItem
}
// const layoutId = 'sidebar-active-indicator'
export const SidebarItem = ({ data }: Props) => {
  const pathname = usePathname()
  const isActive = useMemo(() => {
    return pathname === data.href
  }, [data.href, pathname])
  return (
    <Link href={data.href}>
      <div
        className={cn(
          'flex items-center gap-1 py-2.5 relative px-2 hover:bg-slate-200 rounded-md',
          isActive && 'bg-black rounded-md hover:bg-black'
        )}
      >
        {React.cloneElement(data.icon, {
          className: cn('h-3.5 w-3.5 relative z-[1]', {
            'text-white': isActive
          })
        })}
        {/* {data.icon} */}
        {/* <data.icon
          className={cn('h-3.5 w-3.5 relative z-[1]', {
            'text-white': isActive
          })}
        /> */}
        <p
          className={cn('font-medium text-xs relative z-[1]', {
            'text-white': isActive
          })}
        >
          {data.name}
        </p>
        {/* {isActive && (
          <motion.div
            layout
            layoutId={layoutId}
            className="absolute inset-0 bg-black rounded-md dark:bg-secondary"
          />
        )} */}
      </div>
    </Link>
  )
}
