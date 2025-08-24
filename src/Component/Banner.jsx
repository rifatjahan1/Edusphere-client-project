import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='mt-12 w-full bg-amber-300'>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/2YKLhg2Y/rsz-1laptop-7292256-1280.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-8 text-4xl font-bold">Your Gateway to Smarter Learning</h1>
                        <p className="mb-8">
                            Discover a smarter way to learn with EduSphere's AI-driven content, adaptive quizzes, and real-time progress insights.
                            EduSphere is your personalized<br></br> digital classroom  intuitive, inspiring, and designed to help you succeed.

                        </p>
                        <Link to='/allArticles'>
                            <button className='btn  bg-cyan-500 text-white text-xl py-6 px-10 rounded-lg border-0'>View All</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>


 
    );
};

export default Banner;