import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-1 navbar-fixed">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={require('../../../public/logountad.PNG')} alt="Logo Untad" width={70} height={50} className="ml-8 mr-5"  />
          <div className="text-2xl font-bold mr-2">
            LandChainGuard
          </div>
          
        </div>
        <div className="flex gap-12 mr-8 text-lg">
          <Link href="/hero" className="hover:text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>Home</Link>
          <Link href="/blockchain" className="hover:text-gray-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>Blockchain</Link>
          <Link href="/testing" className="hover:text-gray-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>Testing</Link>
          <Link href="/arsitektur" className="hover:text-gray-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>Arsitektur</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar