import React from 'react';
import "./Appointment.css"
const Appointment = () => {
    return (
        <div className="text-center mt-5 border  shadow-lg p-5 mb-5 bg-body rounded p-5 margin">
            <h1 className="mb-5">Do you want to consult a doctor?</h1>
            <form className="form">
                <label for="meeting-time "><span className="text-primary">Choose your preferred date and time : </span> </label>
                <input className="mb-2" type="datetime-local" id="meeting-time"
                    name="meeting-time" value="2018-06-12T19:30"
                    min="2018-06-07T00:00" max="2018-06-14T00:00" />
                <br />

            </form>
            <p className="text-primary">Phone number :<input type="number" name="" placeholder="Phone Number" id="" /></p>
            <p className="text-primary">Email :<input type="number" name="" placeholder="Email" id="" /></p>
            <input type="submit" value="Submit" />
        </div>
    );
};

export default Appointment;