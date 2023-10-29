import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import TribalPantsRow from './TribalPantsRow';

const TribalPants = () => {

    const { data: pantMerchs, isLoading, refetch } = useQuery('pantMerchs', () => fetch('https://givingtree.onrender.com/pantmerch').then(res => res.json()))

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
                    Choose Stylish Handmade Pants for you to wear.
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
                </div>
            </section>
        </div>
    );
};

export default TribalPants;