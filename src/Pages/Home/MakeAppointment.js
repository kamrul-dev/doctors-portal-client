import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`,
                backgroundSize: "cover"
            }}>
            <div className='flex justify-center items-center my-28 container mx-auto'>
                <div className='flex-1 justify-center hidden lg:block'>
                    <img width="600" className='mt-[-100px]' src={doctor} alt='doctorPhoto' />
                </div>
                <div className='flex-1 text-white p-8'>
                    <h3 className='text-xl text-primary font-bold mb-4'>Appointment</h3>
                    <h2 className='text-3xl'>Make an Appointment Today</h2>
                    <p className='mt-5 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde dolorem maxime nam sunt iure quos, inventore ad repellat. Alias, nisi pariatur adipisci officia sed tenetur non perspiciatis quasi dolorem quo necessitatibus recusandae, voluptas voluptate voluptates cupiditate esse modi quidem!</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;