'use client'
import { authUserDataSelector } from '@/src/state/auth-state/(recoil)'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useLogout } from '@/src/state/auth-state/hooks'

export const Header = () => {
  const userData = useRecoilValue(authUserDataSelector)
  const { logout } = useLogout()
  return (
    <>
      {/* {JSON.stringify(userData)} */}
      <div className="rounded-2xl w-full py-5 px-3  shadow-2xl mb-10 border flex justify-between">
        <div className="flex items-center gap-2.5">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p className="font-medium text-base">{userData?.school?.name}</p>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={userData?.user?.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="left" align="start">
              <DropdownMenuLabel>{userData?.user?.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  )
}
