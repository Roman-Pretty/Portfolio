import logo from '../assets/logo.png';
import { FC, useState } from 'react';

interface ListItemProps {
    name: string;
    isSelected: boolean;
    href: string;
    click: () => void;
}

const ListItem: FC<ListItemProps> = ({ name, isSelected, href, click }) => {
    return (
        <li className={isSelected ? 'selected' : ''}>
            <a href={href} onClick={click}>{name}</a>
            {isSelected && <hr />}
        </li>
    );
};

function Header() {
    const [selected, setSelected] = useState('home');

    const handleItemClick = (itemName: string) => {
        setSelected(itemName);
    };

    return (
        <header>
            <img src={logo} alt='Roman Pretty'></img>
            <nav>
                <ul>
                    <ListItem name='Home' isSelected={selected === 'home'} href='#home' click={() => handleItemClick('home')} />
                    <ListItem name='About' isSelected={selected === 'about'} href='#about' click={() => handleItemClick('about')} />
                    <ListItem name='Projects' isSelected={selected === 'projects'} href='#projects' click={() => handleItemClick('projects')} />
                    <ListItem name='Resume' isSelected={selected === 'resume'} href='#resume' click={() => handleItemClick('resume')} />
                </ul>
            </nav>
            <button>Contact Me</button>
        </header>
    );
}

export default Header;