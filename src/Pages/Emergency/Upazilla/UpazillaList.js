import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UpazillaListRow from './UpazillaListRow';

const UpazillaList = () => {

    let arrayList = [];
    const [neededUpazillas, setNeededUpazillas] = useState([]);

    useEffect(() => {
        fetch(`https://givingtree.onrender.com/upazilla`).then((res) =>
            res.json().then((data) => {
                arrayList = data.filter((data) => data.donation === 'Not Given');
                setNeededUpazillas(arrayList);
            })
        );
    }, []);


    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-6 mx-auto">
                <div class="text-center mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Upazillas needs Donating to</h1>
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">The Upazillas mentioned below needs relief fund for the disaster they are facing. Start an Emergency Relief Reqeust to get started helping those in need.</p>
                </div>
                <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {
                        neededUpazillas?.map((neededUpazilla, index) =>
                            <UpazillaListRow
                                key={neededUpazilla._id}
                                neededUpazilla={neededUpazilla}
                            ></UpazillaListRow>
                        )
                    }
                </div>
                <div className='flex justify-center m-8'>
                    <Link to='/dashboard/addemergencyrelief' class="btn btn-sm bg-rose-700 text-white">Add new Emergency Relief Request</Link>
                </div>
            </div>
        </section>
    );
};

export default UpazillaList;