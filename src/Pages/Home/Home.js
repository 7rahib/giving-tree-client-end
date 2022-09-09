import React from 'react';
import Contact from './Contact';
import Faq from './Faq';
import Feature from './Feature';
import Gallary from './Gallary';
import Hero from './Hero';
import Services from './Services';
import Stats from './Stats';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Feature></Feature>
            <Stats></Stats>
            <Services></Services>
            <Gallary></Gallary>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default Home;