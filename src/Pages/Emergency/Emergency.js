import React from 'react';
import LatestEmergencies from './LatestEmergency/LatestEmergencies';
import RunningReliefs from './RunningReliefs/RunningReliefs';
import UpazillaList from './Upazilla/UpazillaList';
import { motion } from 'framer-motion';

const Emergency = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
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
        </motion.div>
    );
};

export default Emergency;