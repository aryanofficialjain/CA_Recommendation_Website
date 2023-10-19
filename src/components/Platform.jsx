import React from 'react'
import Acadamy from '/img/acadamy.svg'
import Connect from '/img/connect.svg'
import Research from '/img/research.svg'
import Search from '/img/search.svg'
import Platform1 from '/img/platform1.png'
import Platform2 from '/img/platform2.png'


const Platform = () => {
  return (
    <>
    
      <div className="platform-container w-full ">
        <div className="platform p-28  w-[100%] flex">
            <div className="left-container  w-[50%]">
                <div className="left flex flex-col gap-4 ">
                    
                    <div className="heading text-5xl py-2 ">
                    <span className='bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>All-in-One</span> platform <br/>that Makes Easier
                    </div>

                    <div className="para text-xl w-[100%] mx-auto  py-7 font-thin">
                        <p>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
                    </div>

                    <div className="left-bottom ">
                            <div className="left-item flex  p-2  w-[100%]">
                            <div className='flex gap-2'>
                                <img src={Search} alt="" />
                                <p><span>Search</span> for vital <br/> company <br/> information</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={Connect} alt="" />
                                <p><span>Connect</span> with the<br/> resources to meet<br/> your business needs.</p>
                            </div>
                            </div>
                            
                            <br/>
                            <div className="right-items flex  p-2 w-[100%]">
                            
                            <div className='flex gap-2'>
                                <img src={Research} alt="" />
                                <p><span>Research</span> and <br/> generate reports <br/> that drive growth</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={Acadamy} alt="" />
                                <p><span className=''>Academy</span> to give you <br/> the skills for success <br/>  in your career</p>
                            </div>

                        

                        </div>
                    </div>

                </div>
            </div>
            

            <div className="right-container  w-[50%] p-2">
                <div className="right ">
                    <div className="top w-full flex items-center gap-4 mb-4">
                        
                        <div className='text-[11px] w-1/2'>
                            <p className='p-3 bg-pink-100 rounded-2xl mb-2'>Hey, check out loreumipsum services. </p>
                            <p className='p-3 bg-pink-100 rounded-2xl mb-2'>I learned from their videos, got my first job.</p>
                            <p className='p-3 bg-pink-100 rounded-2xl mb-2'>You won't be disappointed with their services.</p>
                            
                        </div>
                        <div className=' rounded-full w-1/2'>
                            <img src={Platform1} alt="" className='rounded-full bg-gray-300 px-7 w-[80%] py-2' />
                        </div>
                    </div>
                    
                    <div className="bottom flex items-center ">
                    <div className=' rounded-full w-1/2'>
                            <img src={Platform2} alt="" className='rounded-full bg-gray-300 px-7 py-2 w-[80%]' />
                        </div>

                    <div className='text-[11px]'>
                        <p className='p-3 shadow-md bg-pink-50 rounded-2xl mb-2'>I got a perfect analysis report from them too</p>
                            <p className='p-3 shadow-md bg-pink-50 rounded-2xl mb-2'>Oh, that's great.</p>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Platform
