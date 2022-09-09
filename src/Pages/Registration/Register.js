import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Who are you?</h1>
                    <p class="py-6">Please choose an option according to how yow identify yourself</p>
                    <div className='grid grid-cols-1 gap-3'>
                        <Link to='/individualRegister' class="btn btn-lg btn-primary">Individual</Link>
                        <Link to='/orgRegister' class="btn btn-lg btn-primary">Organisation</Link>
                        <Link to='/volunteerRegister' class="btn btn-lg btn-primary">Volunteer</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;