import React from 'react';

import Tab from './tab';
import './styles.scss';

const tabs = ['Full Match', '1st Half', '2nd Half'];

const Navigation: React.FC = () => {
    return (
        <div className="navigation">
            {tabs.map((tab, i) => <Tab title={tab} key={`${tab}-${i}`} />)}
        </div>
    );
};

export default Navigation;
