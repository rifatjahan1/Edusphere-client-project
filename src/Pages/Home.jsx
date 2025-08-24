import React from 'react';
import Banner from '../Component/Banner';
import { useLoaderData } from 'react-router';
import TopCardDataHome from '../Component/TopCardDataHome';
import CategoryList from '../Component/CategoryList';
import ExtraOne from '../Component/ExtraOne';
import ExtraTwo from '../Component/ExtraTwo';

const Home = () => {
    const featuredArticles = useLoaderData();
    return (

        <div>
            <Banner></Banner>
            <div>
                <h1 className='mt-12 mb-8 text-2xl md:text-4xl lg:text-4xl text-center font-semibold'>Top Articles</h1>
            <p className='text-center mb-8'>EduSphere empowers students to exchange ideas and insights across diverse academic domains such as Science, Technology, Arts, <br></br>and Literature.
                It promotes a vibrant learning community where users can publish articles, engage through comments,<br></br> express appreciation with likes, and explore content by category.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {featuredArticles.map((article, index) => (
                    <TopCardDataHome key={index} article={article}></TopCardDataHome>

                ))}
            </div>
            </div>
            <CategoryList></CategoryList>
            <ExtraOne></ExtraOne>
            <ExtraTwo></ExtraTwo>


        </div>


    );
};

export default Home;