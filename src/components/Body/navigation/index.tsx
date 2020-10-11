import React from 'react';

import Tab from './tab';
import './styles.scss';
import { Phase } from '../../../enums/stats';

const tabs = [
    { title: 'Full Match', phase: Phase.FullMatch },
    { title: '1st Half', phase: Phase.FirstHalf },
    { title: '2nd Half', phase: Phase.SecondHalf }
];

interface INavigationProps {
    activeTab: Phase;
    switchTabs(phase: Phase): void;
}

const Navigation: React.FC<INavigationProps> = ({activeTab, switchTabs}) => {
    return (
        <div className="navigation">
            {tabs.map((tab, i) => <Tab title={tab.title} phase={tab.phase} switchTabs={switchTabs} active={tab.phase === activeTab} key={`${tab}-${i}`} />)}
        </div>
    );
};

export default Navigation;
