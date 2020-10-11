import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {getFixtures} from '../../services/fixtures';
import { Phase } from '../../enums/stats';
import Navigation from './navigation';
import Stats from './stats';

import './styles.scss';
import selector from './selector';

const Body: React.FC = () => {
    const { hasMatch } = useSelector(selector);

    useEffect(() => {
        getFixtures();
    }, []);

    return (
        <main className="body">
            <h1>General</h1>
            <Navigation />
            {hasMatch && <Stats phase={Phase.FullMatch} />}
        </main>
    );
};

export default Body;
