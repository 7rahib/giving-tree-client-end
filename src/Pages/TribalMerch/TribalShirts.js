import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import TribalShirtsRow from './TribalShirtsRow';

const TribalShirts = () => {

    const { data: shirtMerchs, isLoading, refetch } = useQuery('shirtMerchs', () => fetch('http://localhost:5000/shirtmerch').then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div class="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 sm:py-8 lg:px-8">
            <header>
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    Shirts Collection
                </h2>

                <p class="max-w-md mt-4 text-gray-500">
                    Choose Stylish Handmade Shirts for you to wear.
                </p>
            </header>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {
                            shirtMerchs?.map((shirtMerch, index) => <TribalShirtsRow
                                key={shirtMerch._id}
                                shirtMerch={shirtMerch}
                                refetch={refetch}
                            >
                            </TribalShirtsRow>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TribalShirts;