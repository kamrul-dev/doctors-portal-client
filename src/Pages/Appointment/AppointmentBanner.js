import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='chairForDentist' className="lg:max-w-xl rounded-lg shadow-2xl" />
                <div className='shadow-lg rounded-lg'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p className='text-center my-2 font-bold'>You have selected: <span className='text-secondary'>{format(date, 'PP')}</span> </p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;