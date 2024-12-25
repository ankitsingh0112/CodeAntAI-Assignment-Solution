import { ArrowUpIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const Auth = () => {
    
    const [isSaas, setIsSaas] = useState(true)

  return (
    <div className="flex gap-2 w-full justify-center border-red-800">
      <div className="hidden md:flex h-full w-1/2 bg-white border-r relative flex-col justify-center items-center">
        <img
          src="/png/logoFaded.png"
          alt="logo"
          className="absolute left-0 bottom-0 w-[300px] aspect-square"
        />

        <div className="border flex-col rounded-xl shadowCard w-full max-w-[400px]">
          <div className="border-b flex gap-2 items-center p-4">
            <img src="/svg/logo.svg" alt="logo" className="w-6 h-6" />
            <span className="font-semibold">
              AI to Detect & Autofix Bad Code
            </span>
          </div>
          <div className="flex justify-between items-center gap-4 p-4">
            <div className="flex flex-col items-center">
              <span className="font-semibold">30+</span>
              <span className="text-sm">Language Support</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-semibold">10K+</span>
              <span className="text-sm">Developers</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-semibold">100K+</span>
              <span className="text-sm">Hours Saved</span>
            </div>
          </div>
        </div>

        <div
          className='flex rounded-xl shadowCard flex-col gap-2 p-4 px-8 translate-x-[50%] -translate-y-[10px] bg-white'
        >
          <div className='flex justify-between min-w-40'>
            <img src="/svg/GraphAuth.svg" alt="graph" />
            <div className='flex flex-col'>
              <div className='flex items-center text-primary'>
                <ArrowUpIcon className='w-5' />
                14%
              </div>
              <div className='font-light text-xs'>This week</div>
            </div>
          </div>
          <div>
            <div className='flex flex-col'>
              <span className='font-semibold'>Issues Fixed</span>
              <span className='font-semibold text-2xl'>500K+</span>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full max-w-[400px] md:max-w-full md:w-1/2 flex-col justify-center items-center p-4 gap-4'>
            <div className='bg-white flex flex-col rounded-xl w-full border'>
                <div className='border-b flex flex-col p-5 w-full gap-4'>
                    <div className='flex items-center justify-center gap-4'>
                        <img src='/svg/logo.svg' alt='logo'/>
                        <span className='font-light'>CodeAnt AI</span>
                    </div>
                    <div className='flex justify-center text-2xl font-semibold mt-2'>
                        Welcome to CodeAnt AI
                    </div>
                    <div>
                        <div className='bg-gray-100/70 border rounded-xl'>
                            <button className={`p-3 rounded-xl w-1/2 ${isSaas ? 'bg-[#1570EF] text-white' : ''}`} onClick={()=>{setIsSaas(true)}}>SAAS</button>
                            <button className={`p-3 rounded-xl w-1/2 ${isSaas ? '' : 'bg-[#1570EF] text-white'}`} onClick={()=>{setIsSaas(false)}}>Self Hosted</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col p-5'>
                    <div className='flex items-center justify-center w-full'>
                        {
                            isSaas ? (
                                <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                                    <a href='/dashboard' className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center">
                                       <img src='/svg/github.svg' alt='github' className='w-5'/>
                                        Sign in with Github
                                    </a>
                                    <a href='/dashboard'
                                       className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center">
                                        <img src='/svg/bitbucket.svg' alt='bitbucket' className='w-5'/>
                                        Sign in with Bitbucket
                                    </a>
                                    <a href='/dashboard'
                                       className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center">
                                        <img src='/svg/azure-devops.svg' alt='azure-devops' className='w-5'/>
                                        Sign in with Azure Devops
                                    </a>
                                    <a href='/dashboard'
                                       className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center">
                                        <img src='/svg/gitlab.svg' alt='gitlab' className='w-5'/>
                                        Sign in with GitLab
                                    </a>
                                </div>
                            ) : (
                                <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                                    <a href='/dashboard'
                                       className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center">
                                        <img src='/svg/gitlab.svg' alt='gitlab' className='w-5'/>
                                        Sign in with GitLab
                                    </a>
                                    <a href={'/dashboard'}
                                       className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center">
                                        <img src="/svg/key.svg" className="w-5"/>
                                        Sign in with SSO
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div>
                <span>By signing up you agree to the <b>Privacy Policy.</b></span>
            </div>
        </div>
    </div>
  );
};

export default Auth;
