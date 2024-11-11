import React from 'react'
import { SideBar } from './(components)/sidebar'
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-black">
      <div className="h-14 flex justify-between items-center">
        <div className="flex items-center pl-5">
          <img
            src="https://api.iconify.design/cil:school.svg?color=%23ffffff"
            className="h-6 w-6"
            alt=""
          />
          <h1 className="text-white text-2xl font-bold ml-2">Management</h1>
        </div>
        <div>
          {/* create logout icon */}
          <div id="logout" className="flex items-center pr-5">
            <img
              src="https://api.iconify.design/hugeicons:logout-04.svg?color=white"
              className="h-6 w-6"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" rounded-t-xl bg-white  flex divide ">
        {/* <div className='w-96'> */}
        <SideBar />
        {/* </div> */}
        <div className="w-full h-[calc(100vh-_56px)] p-2 pr-0 pb-0">
          <div className="w-full overflow-y-auto h-full ">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default DashBoardLayout
