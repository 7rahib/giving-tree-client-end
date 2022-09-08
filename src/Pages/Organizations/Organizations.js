import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import OrganizationsCard from './OrganizationsCard';

const Organizations = () => {

    const { data: organizations, isLoading, refetch } = useQuery('organizations', () => fetch('http://localhost:5000/organizations').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
                <h1
                    class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"
                >
                    <span class="inline md:block">Organizations </span>
                    <span
                        class="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary md:inline-block"
                    >who are working with us</span
                    >
                </h1>
                <div
                    class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg"
                >Do you want to join forces with us? Follow instrustions below
                </div>
                <div class="flex flex-col items-center mt-12 text-center">
                    <span class="relative inline-flex w-full md:w-auto">
                        <Link to='/orgRegister'
                            class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-primary border border-transparent rounded-full md:w-auto hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >Join us as an Organization
                        </Link>
                    </span>
                </div>
            </div>
            <div class="p-2 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    organizations.map((organization, index) => <OrganizationsCard
                        key={organizations._id}
                        product={organization}
                        refetch={refetch}
                    ></OrganizationsCard>)
                }
            </div>
        </div>
    );
};

export default Organizations;