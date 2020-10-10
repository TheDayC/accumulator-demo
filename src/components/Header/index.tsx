import React from 'react';
import Navigation from './navigation';

import Score from './score';

const Header: React.FC = () => {
    return (
        <header className="header">
            <Score />
            <Navigation />
        </header>
    );
};

export default Header;
