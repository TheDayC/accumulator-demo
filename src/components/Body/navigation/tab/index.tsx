import React from 'react';

import './styles.scss';

interface ITabProps {
    title: string;
}

const Tab: React.FC<ITabProps> = ({title}) => (
    <div className="tab">
        <span>{title}</span>
    </div>
);

export default Tab;
