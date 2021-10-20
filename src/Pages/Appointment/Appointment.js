import React from 'react';
import "./Appointment.css"
const Appointment = () => {
    return (
        <div className="text-center mt-5 border  shadow-lg p-5 mb-5 bg-body rounded p-5 margin">
            <h1 className="mb-5">Do you want to consult a doctor?</h1>
            <form className="w-50 form">
            <label for="meeting-time "><span className="text-primary fs-3">Choose your preferred date and time: </span> </label>
                <input className="mb-2" type="datetime-local" id="meeting-time"
                    name="meeting-time" value="2018-06-12T19:30"
                    min="2018-06-07T00:00" max="2018-06-14T00:00" />
                <br />
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Book Appointment</button>
                

            </form>
        </div>
    );
};

export default Appointment;