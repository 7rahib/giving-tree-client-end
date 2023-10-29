import React from 'react';
import { useQuery } from 'react-query';
import UpazillaDonationsRow from './UpazillaDonationsRow';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


Modal.setAppElement('#root');
const UpazillaDonations = () => {

    const { data: upazillaInfos, isLoading, refetch } = useQuery('upazillaInfos', () => fetch('https://givingtree.onrender.com/upazilla').then(res => res.json()))

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const donation = 'Not Given';
    const onSubmit = (data) => {
        const newUpazilla = {
            upazilla: data.upazilla,
            city: data.city,
            donation: donation
        };
        fetch("https://givingtree.onrender.com/upazilla", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newUpazilla),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    console.log(data);
                    closeModal();
                }
            });
    }


    return (
        <div>
            <div>
                <h5 className='text-xl font-semibold text-center'>Donation according to Upazillas</h5>
            </div>
            <div className='flex m-3'>
                <button onClick={openModal} className='btn btn-sm bg-primary'>Add New Upazillas</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {
                            upazillaInfos?.map((upazillaInfo, index) =>
                                <UpazillaDonationsRow
                                    key={upazillaInfo._id}
                                    upazillaInfo={upazillaInfo}
                                    refetch={refetch}
                                ></UpazillaDonationsRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="mb-5 text-center font-semibold">Add new Upazilla</h1>
                    <div className='w-96'>
                        <div>
                            <label className='mr-2'>Upazilla Name:</label>
                        </div>
                        <div>
                            <input type="text" name='upazilla' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                {...register("upazilla", {
                                    required: {
                                        value: true,
                                        message: 'Upazilla Name is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.upazilla?.type === 'required' && <span className="label-text-alt text-red-500">{errors.upazilla.message}</span>}
                            </label>
                        </div>
                        <div>
                            <div>
                                <label className='mr-2'>City Name:</label>
                            </div>
                            <div>
                                <input type="text" name='city' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    {...register("city", {
                                        required: {
                                            value: true,
                                            message: 'City Name is required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}
                                </label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-end mt-3">
                        <button className="btn btn-sm mr-3" onClick={closeModal}>
                            Cancel
                        </button>
                        <input type="submit" value="Add" className="btn btn-sm" />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default UpazillaDonations;