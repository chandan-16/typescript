import Hero from '../assets/hero.png';

interface NavItem {
    id: number;
    name: string;
}

export const Header = () => {

    const navItems: NavItem[] = [
        {id: 1001, name: 'Home'},
        {id: 1002, name: 'About'},
        {id: 1003, name: 'Services'},
        {id: 1004, name: 'Contact'},
    ]

  return (
    <header>
        <img src={Hero} alt="Logo image" />
        <nav>
            <ul>
                {
                    navItems.map(({id, name}) => (
                        <li key={id}>
                            <span>{name}</span>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </header>
  )
}
