import React from 'react';
import LatestEmergencies from './LatestEmergency/LatestEmergencies';
import RunningReliefs from './RunningReliefs/RunningReliefs';
import UpazillaList from './Upazilla/UpazillaList';

const Emergency = () => {
    return (
        <div>
            <div className='mt-10'>
                <h3 className='text-3xl text-center font-semibold mb-5'>Latest Crisis</h3>
                <div className='mt-5 p-2'>
                    <LatestEmergencies></LatestEmergencies>
                </div>
            </div>
            <div>
                <UpazillaList></UpazillaList>
            </div>
            <RunningReliefs></RunningReliefs>
        </div>

    );
};

export default Emergency;