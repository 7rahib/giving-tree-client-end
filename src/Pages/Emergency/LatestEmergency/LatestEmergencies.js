import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import LatestEmergencyRow from './LatestEmergencyRow';

const LatestEmergencies = () => {

    const { data: latestReliefs, isLoading, refetch } = useQuery('latestReliefs', () => fetch('https://givingtree.onrender.com/emergencyrelief').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-3'>
            {
                latestReliefs?.slice(0, 2).reverse().map((latestRelief) => <LatestEmergencyRow
                    key={latestRelief._id}
                    latestRelief={latestRelief}
                    refetch={refetch}
                ></LatestEmergencyRow>)
            }
        </div>

    );
};

export default LatestEmergencies;