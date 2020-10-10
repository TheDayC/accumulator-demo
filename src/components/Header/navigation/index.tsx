import React from 'react';
import { INavigation } from '../../../types/navigation';

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
            {navLinks.map(link => {
                if (link.href) {
                    return (
                        <div className="navLink">
                            <a href={link.href}>
                                <span>{link.title}</span>
                            </a>
                        </div>
                    );
                } else {
                    return (
                        <div className="navLink">
                            <span>{link.title}</span>
                        </div>
                    );
                }
            })}
        </nav>
    );
};

export default Navigation;
