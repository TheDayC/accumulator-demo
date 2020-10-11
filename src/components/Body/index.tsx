import React from 'react';
import Navigation from './navigation';

import './styles.scss';

const Body: React.FC = () => {
    return (
        <main className="body">
            <h1>General</h1>
            <Navigation />
        </main>
    );
};

export default Body;
