import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import TribalPantsRow from './TribalPantsRow';

const TribalPants = () => {

    const { data: pantMerchs, isLoading, refetch } = useQuery('pantMerchs', () => fetch('http://localhost:5000/pantmerch').then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div class="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 sm:py-8 lg:px-8">
            <header>
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    Pants Collection
                </h2>

                <p class="max-w-md mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                    praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                    natus?
                </p>
            </header>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {
                            pantMerchs?.map((pantMerch, index) => <TribalPantsRow
                                key={pantMerch._id}
                                pantMerch={pantMerch}
                                refetch={refetch}
                            >
                            </TribalPantsRow>)
                        }
                    </div>
                    <div className='flex justify-end'>
                        <a className="block w-full px-8 py-2 text-sm font-medium text-white rounded shadow bg-green-700 sm:w-auto active:bg-green-500 hover:bg-green-900 focus:outline-none focus:ring" href="/get-started">
                            See all
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TribalPants;