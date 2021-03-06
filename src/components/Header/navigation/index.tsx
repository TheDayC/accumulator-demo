import React from 'react';

import { INavigation } from '../../../types/navigation';
import './styles.scss';

const navLinks: INavigation[] = [
    { href: null, title: 'Overview' },
    { href: '/', title: 'General' },
    { href: null, title: 'AVL' },
    { href: null, title: 'LIV' },
    { href: null, title: 'Player' }
];

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            {navLinks.map((link, i) => {
                if (link.href) {
                    return (
                        <div className="navLink active" key={`${link.title}-${i}`}>
                            <a href={link.href}>
                                {link.title}
                            </a>
                        </div>
                    );
                } else {
                    return (
                        <div className="navLink" key={`${link.title}-${i}`}>
                            <span>{link.title}</span>
                        </div>
                    );
                }
            })}
        </nav>
    );
};

export default Navigation;
