import React from 'react';
import Modal from 'react-modal';

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

const VolunteerRow = ({ product, refetch }) => {
    const { name, interest, email, address, isActive, img, number, gender, age } = product;

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

    return (
        <div class="relative bg-white py-4 px-4 rounded-3xl w-52 h-60 my-2 shadow hover:shadow-xl hover:bg-base-100">
            <div className='h-44'>
                <div className="avatar">
                    <div className="w-16 rounded-full shadow-xl">
                        <img src={img} alt='Volunteer' />
                    </div>
                </div>
                <div class="flex flex-col items-center mt-8">
                    <div>
                        <p class="text-md font-semibold my-2">{name}</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-between text-gray-500 text-sm">
                <p className='text-xs'>{interest}</p>
                <button onClick={openModal} className='btn btn-xs btn-primary'>Details</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex justify-end'>
                    <button onClick={closeModal} className='btn btn-xs btn-primary rounded-full'>X</button>
                </div>
                <p href="#" class="block rounded-lg p-4">
                    <img
                        alt="Home"
                        src={img}
                        class="h-56 w-full rounded-md object-cover"
                    />

                    <div class="mt-2">
                        <dl>
                            <div>
                                <dd class="text-xs text-gray-600">{address}</dd>
                            </div>
                            <div className='flex items-center justify-start'>
                                <dd class="text-sm text-gray-600">{email}</dd>
                                <dd class="ml-2 text-sm text-gray-600">{number}</dd>

                            </div>

                            <div className='flex items-center justify-start'>
                                <dd class="font-medium">{name}</dd>
                                <dd class="ml-2 text-sm text-gray-600">{gender}</dd>
                            </div>
                        </dl>

                        <div class="mt-6 flex items-center gap-8 text-xs">
                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                                <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p class="text-gray-500">Age</p>

                                    <p class="font-medium">{age} years</p>
                                </div>
                            </div>

                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">

                                <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p class="text-gray-500">Available</p>

                                    <p class="font-medium">{isActive}</p>
                                </div>
                            </div>

                            <div class="sm:inline-flex sm:shrink-0 sm:items-center">

                                <div class="mt-1.5 sm:ml-3 sm:mt-0">
                                    <p class="text-gray-500">Interest</p>

                                    <p class="font-medium">{interest}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-primary w-full btn-xs mt-5'>Contact</button>
                </p>

            </Modal>
        </div>
    );
};

export default VolunteerRow;