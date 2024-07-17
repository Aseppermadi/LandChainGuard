import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-5 navbar-fixed">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          LandChainGuard
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Blockchain</a>
          <a href="#" className="hover:text-gray-300">Testing</a>
          <a href="#" className="hover:text-gray-300">Arsitektur</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
