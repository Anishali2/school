import React from 'react'
import {
  BriefcaseBusiness,
  House,
  Landmark,
  PencilRuler,
  PersonStanding,
  Settings,
  WalletMinimal
} from 'lucide-react'
// import { TSidebarItem } from './types'
import { SidebarItem } from './(components)/sidebar-item'
import { URLS } from '@/src/lib/URLS'

const sidebarData: {
  name: string
  icon: iconType
  href: string
}[] = [
  {
    name: 'Dashboard',
    icon: 'House',
    href: URLS.dashboardHome
  },
  {
    name: 'Classes',
    icon: 'PencilRuler',
    href: URLS.classes
  },
  {
    name: 'Students',
    icon: 'PersonStanding',
    href: URLS.students
  },
  {
    name: 'Teachers',
    icon: 'BriefcaseBusiness',
    href: URLS.employees
  },
  {
    name: 'Fees',
    icon: 'WalletMinimal',
    href: URLS.fees
  },
  { name: 'Salaries', icon: 'Landmark', href: URLS.salaries },
  { name: 'Settings', icon: 'Settings', href: URLS.settings }
]
type iconType =
  | 'House'
  | 'PencilRuler'
  | 'PersonStanding'
  | 'BriefcaseBusiness'
  | 'WalletMinimal'
  | 'Landmark'
  | 'Settings'
const IconComponent = ({ iconName }: { iconName: iconType }) => {
  const IconMap = {
    House,
    PencilRuler,
    PersonStanding,
    BriefcaseBusiness,
    WalletMinimal,
    Landmark,
    Settings
  }
  const Icon = IconMap[iconName]
  return Icon ? <Icon /> : null
}

export const SideBar = () => {
  return (
    <div className="w-60 p-3 bg-gray-100/50 rounded-tl-xl border-r relative">
      <div className="w-48 flex flex-col gap-2.5 flex-1">
        {sidebarData.map((item, index) => (
          <SidebarItem
            key={index}
            data={{
              ...item,
              icon: <IconComponent iconName={item.icon} />
            }}
          />
        ))}
      </div>
    </div>
  )
}
