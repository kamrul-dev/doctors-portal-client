import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section
        style={{
            background: `url(${appointment})`
        }}
         className='flex justify-center items-center mt-36'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-170px]' src={doctor} alt='doctorPhoto' />
            </div>
            <div className='flex-1 text-white p-8'>
                <h3 className='text-xl text-primary font-bold mb-4'>Appointment</h3>
                <h2 className='text-3xl'>Make an Appointment Today</h2>
                <p className='mt-5 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde dolorem maxime nam sunt iure quos, inventore ad repellat. Alias, nisi pariatur adipisci officia sed tenetur non perspiciatis quasi dolorem quo necessitatibus recusandae, voluptas voluptate voluptates cupiditate esse modi quidem!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;