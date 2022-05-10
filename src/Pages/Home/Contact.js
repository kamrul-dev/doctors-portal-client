import React from 'react';
import contact from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Contact = () => {
    return (
        <section
            style={{
                background: `url(${contact})`,
                backgroundSize: "cover"
            }}
            className='flex justify-center py-16'>
            <div>
                <div>
                    <h4 className="text-xl text-primary font-bold text-center">Contact Us</h4>
                    <h2 className='text-3xl text-center mb-10 text-white'>Stay Connected With Us</h2>
                </div>
                <div>
                    <form>
                        <div className='mb-5'>
                            <input type="email" className='border w-96 h-12 text-xl px-4 rounded-lg focus:outline-primary' placeholder='Email' />
                        </div>
                        <div className='mb-5'>
                            <input type="text" className='border w-96 h-12 text-xl px-4 rounded-lg focus:outline-primary' placeholder='Subject' />
                        </div>
                        <div className='mb-5'>
                            <textarea type="text" className='border w-96 h-32 text-xl px-4 py-3 rounded-lg focus:outline-primary' placeholder='Your Message' />
                        </div>
                        <div className="text-center">
                            <PrimaryButton><span className='px-9'>Submit</span></PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;