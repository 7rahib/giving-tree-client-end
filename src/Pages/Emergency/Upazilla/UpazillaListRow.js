import React from 'react';
import { FiMapPin } from "react-icons/fi";
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

const UpazillaListRow = ({ neededUpazilla }) => {

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

    const { _id, city, donation, upazilla } = neededUpazilla;

    return (
        <div onClick={openModal} class="p-2 sm:w-1/2 w-full text-rose-700">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center  hover:bg-gray-200">
                <FiMapPin className='text-lg mr-5' />
                <span class="title-font font-medium">{upazilla}</span>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h1 className="mb-2 text-center">Details about</h1>
                <h1 className='text-lg text-center font-semibold'>{upazilla} Upazilla</h1>
                <br />
                <div>
                    <div>
                        Name: {upazilla}
                    </div>
                    <div>
                        City: {city}
                    </div>
                    <div>
                        Donation Status: {donation}
                    </div>
                </div>
                <div className="flex justify-end mt-3">
                    <button className="btn btn-sm bg-rose-700 mr-3" onClick={closeModal}>
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default UpazillaListRow;