import { ChevronDownIcon, CodeIcon, ExitIcon, GearIcon, HamburgerMenuIcon, HomeIcon, LayersIcon } from '@radix-ui/react-icons';
import React, { useEffect, useRef, useState } from 'react'

const MenuBar = () => {
    const [isSideBarVisible, setIsSideBarVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const isMobileRef = useRef(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            const isMobileLocal = width < 768
            if(isMobileLocal){
                setIsMobile(true)
                isMobileRef.current = true
            }else{
                setIsMobile(false)
                isMobileRef.current = false
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
        <div className="flex flex-col w-full md:w-64 bg-white md:h-screen border-r relative">
            <div className='flex justify-between md:justify-around w-full px-4 items-center'>
                <div className="flex items-center justify-center gap-4 h-16">
                    <img src='/svg/logo.svg' alt='logo' className='w-6'/>
                    <h1 className="text-lg font-semibold">CodeAnt AI</h1>
                </div>

                <div className='flex md:hidden'>
                   <button onClick={()=>{setIsSideBarVisible(prevState => !prevState)}}>
                       <HamburgerMenuIcon className='size-5' />
                   </button>
                </div>
            </div>

            <div
                className='absolute md:static bottom-0 w-full h-screen md:h-full bg-black/10 translate-y-full md:translate-y-0 flex overflow-hidden transition-all'
                style={{
                    height: isMobile ? (isSideBarVisible ? 'calc(100vh - 64px)' : '0px') : '100%',
                }}
            >
                <div
                    className='bg-white w-full h-fit md:h-full flex flex-col'>
                    <div className="flex flex-col items-center py-4">
                <span className="mt-2 text-sm border p-2 rounded-xl flex gap-2 items-center">
                    <span>UtkarshDhairyaPanwar...</span>
                    <ChevronDownIcon className='w-5'/>
                </span>
                    </div>

                    <nav className="flex-1 px-4 py-2 space-y-2">
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium bg-[#1570EF] text-white rounded-lg"
                        >
                            <span className="flex-shrink-0"><HomeIcon className='w-6'/></span>
                            <span className="ml-3">Repositories</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <span className="flex-shrink-0"><CodeIcon className='w-6'/></span>
                            <span className="ml-3">AI Code Review</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <span className="flex-shrink-0 ml-1"><img src='/svg/cloud.svg' className='w-4'/></span>
                            <span className="ml-3">Cloud Security</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <span className="flex-shrink-0"><LayersIcon className='w-6'/></span>
                            <span className="ml-3">How to Use</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <span className="flex-shrink-0"><GearIcon className='w-6'/></span>
                            <span className="ml-3">Settings</span>
                        </a>
                    </nav>

                    <div className="px-4 py-4">
                        <a
                            href="#"
                            className="flex items-center px-5 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <span className="flex-shrink-0 ml-1"><img src='/svg/phone.svg' className='w-4'/></span>
                            <span className="ml-3">Support</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <span className="flex-shrink-0"><ExitIcon className='w-6'/></span>
                            <span className="ml-3">Logout</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar