import React from 'react';
import TribalMerchHero from './TribalMerchHero';
import TribalShirts from './TribalShirts';
import TribalHandMade from './TribalHandMade';
import TribalFeature from './TribalFeature';
import TribalPants from './TribalPants';
import { motion } from 'framer-motion';

const TribalMerch = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <TribalMerchHero />
            <TribalFeature />
            <TribalHandMade />
            <TribalShirts />
            <TribalPants />
        </motion.div>
    );
};

export default TribalMerch;