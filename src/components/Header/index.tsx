import React from 'react';

import Score from './score';

const Header: React.FC = () => {
    return (
        <header className="header">
            <Score />
        </header>
    );
};

export default Header;
