import React, { MouseEvent } from 'react';

import { Phase } from '../../../../enums/stats';
import './styles.scss';

interface ITabProps {
    title: string;
    phase: Phase;
    active: boolean;
    switchTabs(phase: Phase): void;
}

const Tab: React.FC<ITabProps> = ({ title, phase, active, switchTabs}) => {

    const onClickSwitchTabs = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        switchTabs(phase);
    };

    let className;

    if (active) {
        className = 'active';
    } else {
        className = ''
    }

    return (
        <div className="tab">
            <button onClick={onClickSwitchTabs} className={className}>{title}</button>
        </div>
    );
};

export default Tab;
