import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Who are you?</h1>
                    <p className="py-6">Please choose an option according to how yow identify yourself</p>
                    <div className='grid grid-cols-1 gap-3'>
                        <Link to='/individualRegister' className="btn btn-lg btn-primary">Individual</Link>
                        <Link to='/orgRegister' className="btn btn-lg btn-primary">Organisation</Link>
                        <Link to='/volunteerRegister' className="btn btn-lg btn-primary">Volunteer</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;