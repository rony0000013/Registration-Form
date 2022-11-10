import React from 'react'
import UserCard from './UserCard'

const Layout = () => {
  return (
    <div className=" h-full flex flex-col md:grid md:grid-cols-12 overflow-y-hidden ">
        <div className="flex md:col-span-4 md:px-6 md:py-6">
              This is registration form.

        </div>
        <div className="flex flex-col px-8 pt-20 md:col-span-8 md:px-6 md:pt-10 md:pb-10 custom-scroll overflow-y-scroll md:grid md:grid-cols-2  place-items-center border-gray-700 border-4">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />

        
            <UserCard />
          
            <UserCard />

        </div>
    </div>
  )
}

export default Layout