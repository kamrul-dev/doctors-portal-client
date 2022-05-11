import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;

    const [user, loading, error] = useAuthState(auth);

    const hadndleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot, _id, name);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={hadndleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-3'>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" disabled />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs" disabled/>
                        <input name="email" type="email" value={user?.email} className="input input-bordered w-full max-w-xs" disabled/>
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;