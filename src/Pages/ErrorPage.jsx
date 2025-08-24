import React from 'react';
import { Link, useRouteError } from 'react-router';


const ErrorPage = () => {
   const error = useRouteError()

  return (
    <>
      
      <div className='flex justify-center '>
        <img src="https://i.ibb.co/cnzHjSt/rsz-1broken-robot-error-404-1.png" alt="" />
      </div>
      <div className='pb-16 text-center '>
        <div className='mb-8 lg:flex items-center justify-center gap-2'>
        <div className=' text-3xl font-bold text-red-400'>
          {error?.status || 404}
        </div>
        <div className=' text-2xl font-bold text-red-400'>-</div>
        
        <div className=' lg:text-2xl font-bold text-red-400 md:text-2xl'>
          {error?.error?.message || 'Something Went Wrong!'}
        </div>
        </div>
        <p className='text-center mb-8 '>Ooop! Your are looking for a does not exists.</p>
        <Link to='/'>
          <button className='btn  bg-purple-800 text-white text-xl h-16 rounded-lg'>Go Back Home</button>
        </Link>
      </div>

    </>
  )
}

export default ErrorPage;