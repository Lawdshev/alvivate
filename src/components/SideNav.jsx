import React from "react";
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd'

function SideNav({ sidebar }) {

  return (
    <>
      <div className=' h-[90vh] font-poppins w-[10vw] xl:w-[15vw] hidden md:flex bg-[#242424]'>
        <div className='h-[50%] lg:h-[30%] xl:h-[50%] w-[85%] mx-auto flex flex-col justify-between mt-[3vh]'>
          <div className='flex flex-col w-[100%] justify-around h-[100%]'>
            <Link className=' h-[10%] nav-links text-[24px] xl:text-[14px] xl:h-[8vh] text-[#FFFFFF] font-medium w-full flex items-center justify-center xl:justify-start px-[5%]  mb-[2%]'>
              <Tooltip placement="topRight" mouseLeaveDelay={0} title='Order Overview'>
                <i className='fa-solid fa-bars'></i>
              </Tooltip>
              <span className='ml-[5%] text-[#FFFFFF] md:hidden xl:flex'>
                Orders Overview
              </span>
            </Link>
            <Link  className='   h-[10%] nav-links text-[24px] xl:text-[14px] xl:h-[8vh] text-[#FFFFFF] font-medium w-full flex items-center justify-center xl:justify-start px-[5%]  mb-[2%]'>
              <Tooltip placement="topRight" mouseLeaveDelay={0} title='Merchant DB'>
                <i className='fa-solid fa-bars'></i>
              </Tooltip>
              <span className='ml-[5%]  text-[#FFFFFF] md:hidden xl:flex'>
                Merchant DB
              </span>
            </Link>
            <Link
            
              className='   h-[10%] nav-links text-[24px] xl:text-[14px] xl:h-[8vh] text-[#FFFFFF] font-medium w-full flex items-center justify-center xl:justify-start px-[5%]   mb-[2%]'>
              <Tooltip placement="topRight" mouseLeaveDelay={0} title='Customer DB'>
                <i className='fa-solid fa-bars'></i>
              </Tooltip>
              <span className='ml-[5%]  text-[#FFFFFF] md:hidden xl:flex'>
                Customer DB
              </span>
            </Link>
            <Link
             
              className='   h-[10%] nav-links text-[24px] xl:text-[14px] xl:h-[8vh] text-[#FFFFFF] font-medium w-full flex items-center justify-center xl:justify-start px-[5%]  mb-[2%]'>
              <Tooltip placement="topRight" mouseLeaveDelay={0} title='Account'>
                <i className='fa-solid fa-bars'></i>
              </Tooltip>
              <span className='ml-[5%]  text-[#FFFFFF] md:hidden xl:flex'>
                Account
              </span>
            </Link>
            <Link
             
              className='   h-[10%] nav-links text-[24px] xl:text-[14px] xl:h-[8vh] text-[#FFFFFF] font-medium w-full flex items-center justify-center xl:justify-start px-[5%]   mb-[2%]'>
              <Tooltip placement="topRight" mouseLeaveDelay={0} title='Utilities'>
                <i className='fa-solid fa-bars'></i>
              </Tooltip>
              <span className='ml-[5%]  text-[#FFFFFF] md:hidden xl:flex'>
                Utilities
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* navbar on mobile */}
      <div
        className={
          !sidebar
            ? "md:hidden bg-[#242424] w-0 -left-[100%] fixed h-[90vh] sideNav"
            : "bg-[#242424] w-[70%] fixed left-0 h-[90vh] md:hidden sideNav"
        }>
        <div className='h-[80%] w-[85%] mx-auto flex flex-col justify-between mt-[20px]'>
          <div className='flex flex-col w-[100%] h-[100%]'>
            <Link
            
              className=' h-[10%] nav-links text-[14px] xl:h-[8vh] text-[#FFFFFF] font-medium w-full flex items-center px-[5%] mb-[3%]'>
              <i className='fa-solid fa-bars'></i>
              <span className='ml-[5%]  text-[#FFFFFF] md:hidden xl:flex'>
                Orders Overview
              </span>
            </Link>
            <Link
             
              className='   h-[10%] nav-links text-[14px] xl:h-[8vh] text-[#FFFFFF] font-medium w-full flex items-center px-[5%]   mb-[3%]'>
              <i className='fa-solid fa-bars'></i>
              <span className='ml-[5%]  text-[#FFFFFF] md:hidden xl:flex'>
                Merchant DB
              </span>
            </Link>
            <Link
            
              className='   h-[10%] nav-links text-[14px] xl:h-[8vh] text-[#FFFFFF] font-medium w-full flex items-center px-[5%]   mb-[3%]'>
              <i className='fa-solid fa-bars'></i>
              <span className='ml-[5%]  text-[#FFFFFF] md:hidden xl:flex'>
                Customer DB
              </span>
            </Link>
            <Link
             
              className='   h-[10%] nav-links text-[14px] xl:h-[8vh] text-[#FFFFFF] font-medium w-full flex items-center px-[5%]   mb-[3%]'>
              <i className='fa-solid fa-bars'></i>
              <span className='ml-[5%]  text-[#FFFFFF] md:hidden xl:flex'>
                Account
              </span>
            </Link>
            <Link
            
              className='   h-[10%] nav-links text-[14px] xl:h-[8vh] text-[#FFFFFF] font-medium w-full flex items-center px-[5%]   mb-[3%]'>
              <i className='fa-solid fa-bars'></i>
              <span className='ml-[5%]  text-[#FFFFFF] md:hidden xl:flex'>
                Utilities
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
