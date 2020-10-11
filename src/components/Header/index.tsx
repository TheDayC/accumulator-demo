import React from 'react';

import Score from './score';
import Navigation from './navigation';
import './styles.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <Score />
            <Navigation />
        </header>
    );
};

export default Header;
