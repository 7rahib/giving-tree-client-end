import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import LatestEmergencyRow from './LatestEmergencyRow';

const LatestEmergencies = () => {

    const { data: latestReliefs, isLoading, refetch } = useQuery('latestReliefs', () => fetch('http://localhost:5000/emergencyrelief').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-3'>
            {
                latestReliefs?.slice(0, 2).map((latestRelief) => <LatestEmergencyRow
                    key={latestRelief._id}
                    latestRelief={latestRelief}
                    refetch={refetch}
                ></LatestEmergencyRow>)
            }
        </div>

    );
};

export default LatestEmergencies;