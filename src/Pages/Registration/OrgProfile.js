import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const OrgProfile = () => {
    const user = useAuthState(auth);
    const email = user[0].email;
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const updateProfile = {
            orgName: data.name,
            address: data.address,
            number: data.number,
            type: data.type
        };
        fetch(`https://givingtree.onrender.com/organization/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset();
                navigate('/emergency');
            })
    }
    return (
        <div>
            <div className="flex justify-center">
                <div className="container sm:mt-18 mb-5 my-auto max-w-md bg-white rounded-lg">
                    <div className="text-center my-6">
                        <h1 className="text-3xl font-semibold text-gray-700">Give some information about your Organisation</h1>
                    </div>
                    {/* Name */}
                    <div className="m-6">
                        <form className="mb-2" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label for="name" className="block mb-2 text-sm text-gray-700">Organisation Name <span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    name="name" placeholder="Enter your organisation name"
                                    className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'A name for the organisation is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            {/* Email */}
                            <div>
                                <label for="address" className="block mb-2 text-sm text-gray-700">Address <span className='text-red-500'>*</span></label>
                                <input
                                    type="text" name="address" placeholder="Physical Address"
                                    className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                    {errors.address?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>
                            </div>
                            {/* Contact Number */}
                            <div>
                                <label for="number" className="block mb-2 text-sm text-gray-700">Contact Number <span className='text-red-500'>*</span></label>
                                <input
                                    type="text" name="number" placeholder="+8801xxxxxxxxx"
                                    className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    {...register("number", {
                                        required: {
                                            value: true,
                                            message: 'Valid contact number is Required'
                                        },
                                        pattern: {
                                            value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                                            message: 'Provide a valid contact number'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                                    {errors.number?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                                </label>
                            </div>
                            <div>
                                <label for="type" className="text-sm text-gray-700">Organization Type <span className='text-red-500'>*</span></label>
                                <input
                                    type="text" placeholder="Elaborate your Organization type" name="type"
                                    className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    {...register("type", {
                                        required: {
                                            value: true,
                                            message: 'Valid type is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.type?.type === 'required' && <span className="label-text-alt text-red-500">{errors.type.message}</span>}
                                    {errors.type?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.type.message}</span>}
                                </label>
                            </div>
                            <div className="mb-1">
                                <input type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out" value="Finish Seting Up The Account"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrgProfile;