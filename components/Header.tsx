import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/dropbox.png'
import { UserButton } from "@clerk/nextjs";
import { SignedOut,SignInButton } from '@clerk/nextjs';
import { ThemeTogler } from './ThemeTogler';

function Header() {
  return (
      <header className='flex items-center justify-between'>
          <Link href="/"
              className='flex  items-center space-x-2'>
              <div className=' w-fit'>
                  <Image
                      src={logo}
                      alt='logo'
                      className='invert'
                      height={50}
                      width={50}
                  />
                  </div>
                  <h1 className='font-bold text-xl'>Dropbox</h1>
                  
          </Link>
          <div className='px-5 flex space-x-2 items-center'>
              {/* theme toggler */}
         <ThemeTogler/>
              <UserButton afterSignOutUrl='/' />
              <SignedOut>
                  <SignInButton  afterSignInUrl='/dashboard' mode='modal'/>
              </SignedOut>
          </div>
          
    </header>
  )
}

export default Header
