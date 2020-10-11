import React, { useEffect } from 'react';

import {getFixtures} from '../../services/fixtures';
import Navigation from './navigation';

import './styles.scss';

const Body: React.FC = () => {

    useEffect(() => {
        getFixtures();
    }, []);

    return (
        <main className="body">
            <h1>General</h1>
            <Navigation />
        </main>
    );
};

export default Body;
