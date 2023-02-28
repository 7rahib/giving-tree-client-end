import React from 'react';
import TribalMerchHero from './TribalMerchHero';
import TribalShirts from './TribalShirts';
import TribalHandMade from './TribalHandMade';
import TribalFeature from './TribalFeature';
import TribalPants from './TribalPants';

const TribalMerch = () => {
    return (
        <div>
            <TribalMerchHero />
            <TribalFeature />
            <TribalHandMade />
            <TribalShirts />
            <TribalPants />
        </div>
    );
};

export default TribalMerch;