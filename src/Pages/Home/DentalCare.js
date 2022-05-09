import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const DentalCare = () => {
    return (
        <div className="hero mt-36">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} alt='treatment' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='ml-24'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil totam fugiat itaque ratione ipsam molestias, maiores quos. Sed voluptas esse odit, molestiae labore, a repellendus pariatur et facere sequi neque fugit? Amet perferendis voluptatum nostrum aut beatae eos dolore, cupiditate ullam ea optio corrupti tempore, repudiandae, suscipit omnis distinctio. Ex.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;