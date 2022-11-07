import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddEmergencyRelief = () => {

    const user = useAuthState(auth);
    const email = user[0].email;

    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = 'a1d7d3a7e4fde5cadc71e0a2315af238';


    const onSubmit = (data) => {
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
                    setIsLoading(true)
                    const img = result.data.url;
                    const newRelief = {
                        name: data.name,
                        address: data.address,
                        number: data.number,
                        isActive: data.isActive,
                        duration: data.duration,
                        city: data.city,
                        img: img,
                        description: data.description,
                        email: email,
                    };
                    fetch(`http://localhost:5000/emergencyrelief`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(newRelief)
                    }).then(res => res.json())
                        .then(data => {
                            setIsLoading(false)
                            console.log(data);
                            reset();
                            navigate('/dashboard');
                        })
                }
            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 class="text-xl font-semibold text-gray-700 text-center mb-3">Add new Emergency Relief</h1>
            <div className='flex justify-center'>
                <form class="mb-2" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label for="name" class="block mb-2 text-sm text-gray-700">Emergency Relief Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Relief name is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    {/* Address */}
                    <div>
                        <label for="address" class="block mb-2 text-sm text-gray-700">Location</label>
                        <input
                            type="text" name="address" placeholder="Where relief will be given"
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
                        <label for="number" class="block mb-2 text-sm text-gray-700">Number of whose in charge</label>
                        <input
                            type="text" name="number"
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
                        <label for="duration" class="text-sm text-gray-700">Duration</label>
                        <input
                            type="text" name="duration"
                            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            {...register("duration", {
                                required: {
                                    value: true,
                                    message: 'Valid duration is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.duration?.type === 'required' && <span className="label-text-alt text-red-500">{errors.duration.message}</span>}
                            {errors.duration?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.duration.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
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
                        <label for="city" class="text-sm text-gray-700">Which city from Sylhet Division?</label>
                        <select {...register("city")} name="city" className="select w-full max-w-xs ml-2">
                            <option disabled selected>Pick a city</option>
                            <option>Sylhet</option>
                            <option>Moulvibazar</option>
                            <option>Sunamganj</option>
                            <option>Habiganj</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label for="isActive" class="text-sm text-gray-700">Can Volunteers join?</label>
                        <select {...register("isActive")} name="isActive" className="select w-full max-w-xs ml-2">
                            <option disabled selected>Pick one</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div>
                        <label for="description" class="block mb-2 text-sm text-gray-700">Description</label>
                        <textarea
                            type="text" name="description" placeholder="Short description"
                            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Valid description is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>
                    <div class="mb-1">
                        <input type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out" value="Check again and click here to post"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmergencyRelief;