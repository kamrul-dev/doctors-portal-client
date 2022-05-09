import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} alt="doctor chair" className="max-w-xl rounded-lg shadow-2xl flex justify-end" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorem repudiandae sequi aspernatur, rerum quisquam cum ea suscipit tempore repellendus non fugiat nostrum nisi dicta deleniti, omnis quidem vel placeat.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;