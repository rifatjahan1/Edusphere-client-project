import React from 'react';
import { NavLink } from 'react-router';


const Footer = () => {
    return (
        <footer className="  min-h-screen  flex justify-center items-center border-2 bg-black lg:mt-12">

            <div className=' lg:flex-col  text-center sm: text-base-content lg:p-10 lg:space-y-6'>



                <div className="flex items-center justify-center ms-4 lg:ms-0">
                    <img src="https://i.ibb.co/Z1SyZrKV/rsz-1notebook.png" alt="EduSphere Logo" className="" />
                    <a className="font-bold text-2xl text-rose-600"><span className='text-orange-600'>Edu</span>Sphere</a>

                </div>

                <div className='
                lg:flex  text-white lg:gap-8'>
                    <div> <NavLink to='/' className={({ isActive }) => isActive ? 'text-white underline' : 'text-white'} >Home</NavLink> </div>
                    <div><NavLink to="/mybookings" className={({ isActive }) => isActive ? 'text-white underline' : 'text-white'}  >My-Article</NavLink></div>
                    <div><NavLink to="/blogs" className={({ isActive }) => isActive ? 'text-white underline' : 'text-white'}>All Article</NavLink></div>
                    <div><NavLink to="/contactus" className={({ isActive }) => isActive ? 'text-white underline' : 'text-white'}>Contact Us</NavLink></div>
                </div>


                <div className="flex items-center justify-center gap-3 mt-4">
                    <div>
                        <a href="https://www.gmail.com"><img src="https://i.ibb.co.com/xKkStmT0/rsz-gmail.png" alt="" /></a>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/'><img src="https://i.ibb.co.com/WWM5qYwH/rsz-facebook.png" alt="" /></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/"><img src="https://i.ibb.co.com/wZgrz7TH/rsz-instagram.png" alt="" /></a>
                    </div>

                </div>
                <p>Copyright © {new Date().getFullYear()} - All right reserved.</p>

            </div>
        </footer>
    );
};

export default Footer;