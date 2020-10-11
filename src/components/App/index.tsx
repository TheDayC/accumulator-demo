import React from 'react';

import Header from '../Header';
import Body from '../Body';
import './styles.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Body />
            </div>
        </div>
    );
};

export default App;
