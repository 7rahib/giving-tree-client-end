import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const VolunteerProfile = () => {
    const user = useAuthState(auth);
    const email = user[0].email;
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = 'a1d7d3a7e4fde5cadc71e0a2315af238';

    const onSubmit = async data => {
        const formData = new FormData();
        const image = data.image[0];
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const updateProfile = {
                        name: data.name,
                        address: data.address,
                        number: data.number,
                        isActive: data.isActive,
                        gender: data.gender,
                        age: data.age,
                        interest: data.interest,
                        img: img
                    };
                    fetch(`https://givingtree.onrender.com/volunteer/${email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(updateProfile)
                    }).then(res => res.json())
                        .then(data => {
                            console.log(data);
                            reset();
                            navigate('/emergency');
                        })
                }
            })



    }
    return (
        <div>
            <div className="flex justify-center">
                <div className="container sm:mt-18 mb-5 my-auto max-w-md bg-white rounded-lg">
                    <div className="text-center my-6">
                        <h1 className="text-3xl font-semibold text-gray-700">Give some information about Yourself</h1>
                    </div>
                    {/* Name */}
                    <div className="m-6">
                        <form className="mb-2" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label for="name" className="block mb-2 text-sm text-gray-700">Full Name <span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    name="name" placeholder="Enter your full name"
                                    className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Your full name is required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            {/* Address */}
                            <div>
                                <label for="address" className="block mb-2 text-sm text-gray-700">Address <span className='text-red-500'>*</span></label>
                                <input
                                    type="text" name="address" placeholder="Present Address"
                                    className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is required'
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
                                <label for="age" className="text-sm text-gray-700">Your age <span className='text-red-500'>*</span></label>
                                <input
                                    type="text" placeholder="Enter your Age" name="age"
                                    className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    {...register("age", {
                                        required: {
                                            value: true,
                                            message: 'Valid age is required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.age?.type === 'required' && <span className="label-text-alt text-red-500">{errors.age.message}</span>}
                                    {errors.age?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.age.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Profile <span className='text-red-500'>*</span></span>
                                </label>
                                <input
                                    type="file"
                                    className="input w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image?.message}</span>}
                                </label>
                            </div>
                            <div className='mb-2'>
                                <label for="interest" className="text-sm text-gray-700">Which sector are you interested in? <span className='text-red-500'>*</span></label>
                                <select {...register("interest")} name="interest" className="select w-full max-w-xs ml-2">
                                    <option disabled selected>Pick a sector</option>
                                    <option>Emergency Relief</option>
                                    <option>Donations</option>
                                    <option>Support a child</option>
                                    <option>Any volunteering work</option>
                                </select>
                            </div>
                            <div className='mb-2'>
                                <label for="gender" className="text-sm text-gray-700">Gender <span className='text-red-500'>*</span></label>
                                <select {...register("gender")} name="gender" className="select w-full max-w-xs ml-2">
                                    <option disabled selected>Pick your gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className='mb-2'>
                                <label for="isActive" className="text-sm text-gray-700">Availabiliy <span className='text-red-500'>*</span></label>
                                <select {...register("isActive")} name="isActive" className="select w-full max-w-xs ml-2">
                                    <option disabled selected>Pick one</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
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

export default VolunteerProfile;