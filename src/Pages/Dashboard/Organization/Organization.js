import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import OrganizationCard from './OrganizationCard';

const Organization = () => {

    const { data: organizationList, isLoading, refetch } = useQuery('organizationList', () => fetch('http://localhost:5000/organizations').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="container max-w-lg px-4 py-20 mx-auto text-left md:max-w-none md:text-center bg-org-pattern">
                <h1
                    className="text-4xl font-extrabold leading-10 tracking-tight text-left text-primary md:text-center sm:leading-none md:text-4xl lg:text-5xl"
                >
                    <span className="inline md:block">Organisations </span>
                    <span
                        className="relative mt-1 text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary md:inline-block"
                    >who are working with us</span
                    >
                </h1>
                <div className="flex flex-col items-center mt-5 text-center">
                    <span className="relative inline-flex w-full md:w-auto">
                        <Link to='/orgRegister'
                            className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-bold leading-6 text-white bg-primary border border-transparent rounded-full md:w-auto hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >Join forces with us
                        </Link>
                    </span>
                </div>
            </div>
            <div className="p-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    organizationList?.map((organization, index) => <OrganizationCard
                        key={organization._id}
                        product={organization}
                        refetch={refetch}
                    ></OrganizationCard>)
                }
            </div>
        </div>
    );
};

export default Organization;