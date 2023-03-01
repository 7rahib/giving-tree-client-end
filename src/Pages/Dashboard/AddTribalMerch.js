import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddTribalMerch = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
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
                    const newMerch = {
                        name: data.name,
                        color: data.color,
                        size: data.size,
                        collection: data.collection,
                        img: img,
                        description: data.description,
                        price: data.price
                    };
                    fetch(`http://localhost:5000/merchs`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(newMerch)
                    }).then(res => res.json())
                        .then(data => {
                            setIsLoading(false)
                            console.log(data);
                            reset();
                            navigate('/dashboard/alltribalmerch')
                        })
                }
            })
    }

    return (
        <div>
            <h1 className="text-xl font-semibold text-gray-700 text-center mb-3">Add new Tribal Merch</h1>
            <div className='flex justify-center'>
                <form className="mb-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-evenly '>
                        <div>
                            <div>
                                <label for="name" className="block mb-2 text-sm text-gray-700">Merch Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Merch name is required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className='mb-2 ml-5'>
                                <label for="size" className="text-sm text-gray-700">Size</label>
                                <select {...register("size")} name="size" className="select select-ghost w-full max-w-xs ml-2">
                                    <option disabled selected>Pick one</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
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
                            <div className='ml-1'>
                                <label for="description" className="block mb-2 text-sm text-gray-700">Description</label>
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

                        </div>
                        <div>

                            <div className='ml-5 mt-1'>
                                <label for="color" className="text-sm text-gray-700">Color</label>
                                <input
                                    type="text" name="color"
                                    className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    {...register("color", {
                                        required: {
                                            value: true,
                                            message: 'Valid color is required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.color?.type === 'required' && <span className="label-text-alt text-red-500">{errors.color.message}</span>}
                                </label>
                            </div>
                            <div className='mb-2 ml-5'>
                                <label for="collection" className="text-sm text-gray-700">Select Type</label>
                                <select {...register("collection")} name="collection" className="select select-ghost w-full max-w-xs ml-2">
                                    <option disabled selected>Pick one</option>
                                    <option>Shirt</option>
                                    <option>Pant</option>
                                    <option>Handmade</option>
                                </select>
                            </div>
                            <div className='ml-5 mt-3'>
                                <label for="price" className="block mb-2 text-sm text-gray-700">Price</label>
                                <input
                                    type="text" name="price"
                                    className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'Valid price is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                </label>
                            </div>


                        </div>

                    </div>
                    <div className="mb-1 flex justify-center">
                        <input type="submit" className="max-w-sm px-3 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out" value="Add New"></input>
                    </div>
                </form>
            </div >
        </div>
    );
};

export default AddTribalMerch;