import React from 'react';
import Contact from './Contact';
import Faq from './Faq';
import Feature from './Feature';
import Gallary from './Gallary';
import Hero from './Hero';
import Services from './Services';
import Stats from './Stats';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero></Hero>
            <Feature></Feature>
            <Stats></Stats>
            <Services></Services>
            <Gallary></Gallary>
            <Faq></Faq>
            <Contact></Contact>
        </motion.div>
    );
};

export default Home;